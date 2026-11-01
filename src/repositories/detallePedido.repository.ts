import type { Prisma } from '../generated/prisma/client.js';
import { prisma } from '../config/prisma.js';
import { HttpError } from '../utils/http.js';

interface CrearDetalleInput {
  producto_id: number;
  cantidad: number;
  descuento?: number | 0;
}

interface ActualizarDetalleInput {
  cantidad: number;
  precio_unitario: number;
  descuento?: number | 0;
}

const verificarPedidoPendiente = async (tx: Prisma.TransactionClient, pedidoId: number): Promise<void> => {
  // Toda modificación de líneas está restringida a pedidos que todavía no fueron procesados.
  const pedido = await tx.pedido.findUnique({
    where: { id: pedidoId },
    select: { estado: true },
  });
  if (!pedido) {
    throw new HttpError(404, 'Pedido no encontrado');
  }

  if (pedido.estado !== 'pendiente') {
    throw new HttpError(400,'Solo se puede modificar el detalle de pedidos pendientes');
  }
};


// Convierte datos Decimal y la relación producto al formato de salida de la API.
const mapearDetalle = (detalle: {
  pedidoId: number;
  productoId: number;
  producto: { nombre: string };
  cantidad: number;
  precioCU: Prisma.Decimal;
  descuento: Prisma.Decimal;
}) => {
  const precio_unitario = Number(detalle.precioCU);
  const descuento = Number(detalle.descuento);

  return {
    pedido_id: detalle.pedidoId,
    producto_id: detalle.productoId,
    producto: detalle.producto.nombre,
    cantidad: detalle.cantidad,
    precio_unitario,
    descuento,
    importe: detalle.cantidad * precio_unitario * (1 - descuento),
  };
};

// Lista las líneas de un pedido, ordenadas por nombre de producto.
async function listar(pedidoId: number) {
  const detalles = await prisma.detallePedido.findMany({ where: { pedidoId }, include: {
      producto: {
        select: { nombre: true }
      }
    }, orderBy: {
      producto: { nombre: 'asc' }
    }
  });
  return detalles.map(mapearDetalle);
}

// Busca usando la clave compuesta pedidoId + productoId.
async function obtener(pedidoId: number, productoId: number) {
  const detalle = await prisma.detallePedido.findUnique({
    where: {
      pedidoId_productoId: { pedidoId, productoId },
    },
    include: {
      producto: {
        select: { nombre: true }
      }
    }
  });

  return detalle ? mapearDetalle(detalle) : undefined;
}

// Crea un detalle de pedido y actualiza el stock del producto.
async function crear(pedidoId: number,{producto_id, cantidad, descuento }: CrearDetalleInput,
): Promise<void> {
  await prisma.$transaction(async (tx) => {
    await verificarPedidoPendiente(tx, pedidoId);

    const producto = await tx.producto.findFirst({
      where: {
        id: producto_id,
        activo: true
      },
      select: {
        precio: true,
        stock: true
      }
    });

    if (!producto) {
      throw new HttpError(
        404,
        `El producto ${producto_id} no existe o está inactivo`
      );
    }

    if (producto.stock < cantidad) {
      throw new HttpError(400,`Stock insuficiente para el producto ${producto_id}`);
    }

    // Alta de detalle y descuento de stock son atómicos: ambos se confirman o ambos se revierten.
    await tx.detallePedido.create({
      data: {
        pedidoId,
        productoId: producto_id,
        cantidad,
        precioCU: producto.precio,
        descuento: descuento ?? 0,
      },
    });

    await tx.producto.update({
      where: { id: producto_id },
      data: {
        stock: { decrement: cantidad },
      }
    });
  });
}

async function actualizar(
  pedidoId: number,
  productoId: number,
  { cantidad, precio_unitario, descuento }: ActualizarDetalleInput,
): Promise<void> {
  await prisma.$transaction(async (tx) => {
    await verificarPedidoPendiente(tx, pedidoId);

    const detalle = await tx.detallePedido.findUnique({
      where: {
        pedidoId_productoId: { pedidoId, productoId }
      },
      select: {
        cantidad: true
      }
    });

    if (!detalle) {
      throw new HttpError(404, 'Detalle de pedido no encontrado');
    }

    // La diferencia contra la cantidad anterior define cuánto stock retirar o devolver.
    const diferencia = cantidad - detalle.cantidad;

    if (diferencia > 0) {
      const producto = await tx.producto.findUnique({
        where: { id: productoId },
        select: {
          stock: true,
          activo: true
        }
      });

      if (!producto) {
        throw new HttpError(404,`Producto ${productoId} no encontrado`);
      }
      if (!producto.activo) {
        throw new HttpError(400,`El producto ${productoId} está inactivo`);
      }

      if (producto.stock < diferencia) {
        throw new HttpError(400,`Stock insuficiente para el producto ${productoId}`);
      }

      await tx.producto.update({
        where: { id: productoId },
        data: { stock: { decrement: diferencia }}
      });

    } else if (diferencia < 0) {
      await tx.producto.update({
        where: { id: productoId },
        data: { stock: { increment: -diferencia }}
      });
    }

    await tx.detallePedido.update({
      where: {
        pedidoId_productoId: { pedidoId, productoId }
      },
      data: {
        cantidad,
        precioCU: precio_unitario,
        descuento: descuento ?? 0}
    });
  });
}

// Elimina un detalle de pedido y devuelve el stock del producto.
async function eliminar(
  pedidoId: number,
  productoId: number
): Promise<void> {
  await prisma.$transaction(async (tx) => {

    await verificarPedidoPendiente(tx, pedidoId);

    const detalle = await tx.detallePedido.findUnique({
      where: {
        pedidoId_productoId: { pedidoId, productoId }
      },
      select: {
        cantidad: true
      }
    });

    if (!detalle) {
      throw new HttpError(404, 'Detalle de pedido no encontrado');
    }
    
    // Al quitar la línea se reintegra al inventario la cantidad que se había reservado.
    await tx.producto.update({
      where: { id: productoId },
      data: {
        stock: { increment: detalle.cantidad }
      }
    });

    await tx.detallePedido.delete({
      where: {pedidoId_productoId: { pedidoId, productoId }}
    });
  });
}

export { listar, obtener, crear, actualizar, eliminar };