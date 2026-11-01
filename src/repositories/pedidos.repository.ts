import { Prisma, type EstadoPedido } from '../generated/prisma/client.js';
import { prisma } from '../config/prisma.js';
import { HttpError } from '../utils/http.js';

interface FiltrosPedido {
  cliente_id?: number;
  empleado_id?: number;
  estado?: EstadoPedido;
  desde?: string;
  hasta?: string;
}

interface ItemPedido {
  producto_id: number;
  cantidad: number;
  descuento?: number;
}

interface DatosPedido {
  cliente_id: number;
  empleado_id: number;
  compania_envio_id: number;
  costo_envio?: number;
  items: ItemPedido[];
}

const incluirPedido = {
  cliente: true,
  empleado: true,
  companiaEnvio: true,
  detalles: {
    include: {
      producto: true,
    },
  },
} satisfies Prisma.PedidoInclude;

type PedidoCompleto = Prisma.PedidoGetPayload<{
  include: typeof incluirPedido;
}>;

type DetalleConImporte = {
  cantidad: number;
  precioCU: Prisma.Decimal;
  descuento: Prisma.Decimal;
};

// Importe de una línea: cantidad por precio unitario, descontando la proporción indicada.
const importeDetalle = (detalle: DetalleConImporte) =>
  detalle.cantidad *
  Number(detalle.precioCU) *
  (1 - Number(detalle.descuento));

  
async function conManejoDeErrores<T>(operacion: () => Promise<T>): Promise<T> {
  try {
    return await operacion();
  } catch (error) {
    if (error instanceof HttpError) throw error;

    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === 'P2025') {
        throw new HttpError(404, 'Pedido o registro relacionado no encontrado');
      }
      if (error.code === 'P2002') {
        throw new HttpError(409, 'El pedido contiene productos duplicados');
      }
      if (error.code === 'P2003') {
        throw new HttpError(400, 'Referencia inválida: un registro relacionado no existe');
      }
    }

    throw error;
  }
}

// Adapta el pedido relacionado de Prisma al JSON que consume la API y calcula sus totales.
function presentarPedido(pedido: PedidoCompleto) {
  const detalle = pedido.detalles.map((item) => ({
    producto_id: item.productoId,
    producto: item.producto.nombre,
    cantidad: item.cantidad,
    precio_unitario: Number(item.precioCU),
    descuento: Number(item.descuento),
    importe: importeDetalle(item),
  }));
  const subtotal = detalle.reduce((suma, item) => suma + item.importe, 0);

  return {
    id: pedido.id,
    fecha_pedido: pedido.fechaPedido,
    fecha_envio: pedido.fechaEnvio,
    estado: pedido.estado,
    costo_envio: Number(pedido.costoEnvio),
    cliente_id: pedido.clienteId,
    cliente: [pedido.cliente.nombre, pedido.cliente.apellido ?? '']
      .filter(Boolean)
      .join(' '),
    empleado_id: pedido.empleadoId,
    empleado: [pedido.empleado.nombre, pedido.empleado.apellido]
      .filter(Boolean)
      .join(' '),
    compania_envio_id: pedido.companiaEnvioId,
    compania_envio: pedido.companiaEnvio.nombre,
    subtotal,
    total: subtotal + Number(pedido.costoEnvio),
    detalle,
  };
}

// Filtra por cliente, empleado, estado o rango de fecha y devuelve resúmenes sin el detalle.
async function listar({
  cliente_id,
  empleado_id,
  estado,
  desde,
  hasta,
}: FiltrosPedido = {}) {
  return conManejoDeErrores(async () => {
    const pedidos = await prisma.pedido.findMany({
      where: {
        ...(cliente_id !== undefined && { clienteId: cliente_id }),
        ...(empleado_id !== undefined && { empleadoId: empleado_id }),
        ...(estado !== undefined && { estado }),
        ...((desde !== undefined || hasta !== undefined) && {
          fechaPedido: {
            ...(desde !== undefined && { gte: new Date(desde) }),
            ...(hasta !== undefined && { lte: new Date(hasta) }),
          },
        }),
      },
      include: incluirPedido,
      orderBy: { fechaPedido: 'desc' },
    });

    return pedidos.map((pedido) => {
      const { detalle, ...resumen } = presentarPedido(pedido);
      return resumen;
    });
  });
}

// Obtiene el pedido con todas sus relaciones para construir una respuesta completa.
async function obtener(id: number) {
  return conManejoDeErrores(async () => {
    const pedido = await prisma.pedido.findUnique({
      where: { id },
      include: incluirPedido,
    });

    return pedido ? presentarPedido(pedido) : undefined;
  });
}

// Crea cabecera, reduce existencias y guarda líneas dentro de una única transacción.
async function crear({
  cliente_id,
  empleado_id,
  compania_envio_id,
  costo_envio,
  items,
}: DatosPedido) {
  return conManejoDeErrores(() =>
    prisma.$transaction(async (tx) => {
      // Si falla cualquier línea (producto, stock o detalle), la transacción revierte todo.
      const pedido = await tx.pedido.create({
        data: {
          clienteId: cliente_id,
          empleadoId: empleado_id,
          companiaEnvioId: compania_envio_id,
          fechaEnvio: new Date(),
          costoEnvio: costo_envio ?? 0,
        },
        select: { id: true },
      });

      for (const item of items) {
        // Solo se venden productos activos; el precio guardado queda fijado al del momento de compra.
        const producto = await tx.producto.findFirst({
          where: {
            id: item.producto_id,
            activo: true,
          },
          select: {
            id: true,
            precio: true,
          },
        });

        if (!producto) {
          throw new HttpError(
            404,
            `El producto ${item.producto_id} no existe o está inactivo`,
          );
        }

        const stockActualizado = await tx.producto.updateMany({
          where: {
            id: producto.id,
            activo: true,
            stock: { gte: item.cantidad },
          },
          data: {
            stock: { decrement: item.cantidad },
          },
        });

        if (stockActualizado.count === 0) {
          throw new HttpError(
            400,
            `Stock insuficiente para el producto ${item.producto_id}`,
          );
        }
        
        // La clave compuesta evita cargar dos veces el mismo producto en un pedido.
        await tx.detallePedido.create({
          data: {
            pedidoId: pedido.id,
            productoId: producto.id,
            cantidad: item.cantidad,
            precioCU: producto.precio,
            descuento: item.descuento ?? 0,
          },
        });
      }

      return pedido.id;
    }),
  );
}

// Actualiza el estado; al pasar a "enviado" registra la fecha actual de envío.
async function actualizarEstado(id: number, estado: EstadoPedido) {
  return conManejoDeErrores(async () => {
    await prisma.pedido.update({
      where: { id },
      data: {
        estado,
        ...(estado === 'enviado' && { fechaEnvio: new Date() }),
      },
    });
  });
}

// Elimina el pedido; sus detalles se eliminan por la relación en cascada.
async function eliminar(id: number) {
  return conManejoDeErrores(async () => {
    await prisma.pedido.delete({ where: { id } });
  });
}

// Agrupa pedidos no cancelados por cliente y ordena por importe vendido descendente.
async function reportePorCliente() {
  return conManejoDeErrores(async () => {
    const clientes = await prisma.cliente.findMany({
      include: {
        pedidos: {
          where: { estado: { not: 'cancelado' } },
          include: { detalles: true },
        },
      },
    });

    return clientes
    // Calcula el total facturado por cliente sumando los importes de cada detalle de pedido.
      .map((cliente) => {
        const pedidos = cliente.pedidos;
        const totalFacturado = pedidos.reduce(
          (total, pedido) =>
            total +
            pedido.detalles.reduce(
              (suma, detalle) => suma + importeDetalle(detalle),
              0,
            ),
          0,
        );

        return {
          cliente_id: cliente.id,
          cliente: [cliente.nombre, cliente.apellido ?? '']
            .filter(Boolean)
            .join(' '),
          cantidad_pedidos: pedidos.length,
          total_facturado: totalFacturado,
        };
      })
      .sort((a, b) => b.total_facturado - a.total_facturado);
  });
}

// Agrupa pedidos no cancelados por empleado y ordena por importe vendido descendente.
async function reportePorEmpleado() {
  return conManejoDeErrores(async () => {
    const empleados = await prisma.empleado.findMany({
      include: {
        pedidos: {
          where: { estado: { not: 'cancelado' } },
          include: { detalles: true },
        },
      },
    });

    return empleados
      .map((empleado) => {
        const pedidos = empleado.pedidos;
        const totalVendido = pedidos.reduce(
          (total, pedido) =>
            total +
            pedido.detalles.reduce(
              (suma, detalle) => suma + importeDetalle(detalle),
              0,
            ),
          0,
        );

        return {
          empleado_id: empleado.id,
          empleado: [empleado.nombre, empleado.apellido].filter(Boolean).join(' '),
          cantidad_pedidos: pedidos.length,
          total_vendido: totalVendido,
        };
      })
      .sort((a, b) => b.total_vendido - a.total_vendido);
  });
}

export {
  listar,
  obtener,
  crear,
  actualizarEstado,
  eliminar,
  reportePorCliente,
  reportePorEmpleado,
};
