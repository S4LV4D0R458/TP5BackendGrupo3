import * as Pedido from '../models/pedidos.model.js';
import type { EstadoPedido } from '../generated/prisma/client.js';
import { HttpError, asyncHandler, parseId, numOpcional, requerir } from '../utils/http.js';

const ESTADOS: EstadoPedido[] = ['pendiente', 'enviado', 'entregado', 'cancelado'];

// Función para buscar un pedido por ID o lanzar un error 404 si no se encuentra
const buscarOFallar = async (id: number) => {
  const pedido = await Pedido.obtener(id);
  if (!pedido) throw new HttpError(404, 'Pedido no encontrado');
  return pedido;
};

// Lista pedidos aplicando filtros opcionales y rechazando estados o fechas mal tipados.
const listar = asyncHandler(async (req, res) => {
  const estadoQuery = req.query.estado;
  if (
    estadoQuery !== undefined &&
    (typeof estadoQuery !== 'string' || !ESTADOS.includes(estadoQuery as EstadoPedido))
  ) {
    throw new HttpError(400, `Estado inválido. Valores posibles: ${ESTADOS.join(', ')}`);
  }

  const desdeQuery = req.query.desde;
  const hastaQuery = req.query.hasta;
  if (
    (desdeQuery !== undefined && typeof desdeQuery !== 'string') ||
    (hastaQuery !== undefined && typeof hastaQuery !== 'string')
  ) {
    throw new HttpError(400, 'Los filtros desde y hasta deben ser texto');
  }

  const estado = estadoQuery as EstadoPedido | undefined;
  const clienteId = numOpcional(req.query.cliente_id, 'cliente_id');
  const empleadoId = numOpcional(req.query.empleado_id, 'empleado_id');

  res.json(
    await Pedido.listar({
      ...(clienteId !== undefined && { cliente_id: clienteId }),
      ...(empleadoId !== undefined && { empleado_id: empleadoId }),
      ...(estado !== undefined && { estado }),
      ...(desdeQuery !== undefined && { desde: desdeQuery }),
      ...(hastaQuery !== undefined && { hasta: hastaQuery }),
    })
  );
});

// Recupera un pedido por ID, incluyendo la presentación preparada por el modelo.
const obtener = asyncHandler(async (req, res) => {
  res.json(await buscarOFallar(parseId(req.params.id)));
});

// Crea un pedido con al menos un producto; comprueba IDs, cantidades y descuentos.
const crear = asyncHandler(async (req, res) => {
  requerir(req.body, ['cliente_id', 'empleado_id', 'compania_envio_id', 'items']);
  const { items } = req.body;
  parseId(req.body.cliente_id, 'cliente_id');
  parseId(req.body.empleado_id, 'empleado_id');
  parseId(req.body.compania_envio_id, 'compania_envio_id');

  // Validación de items: debe ser un arreglo con al menos un producto, y cada producto debe tener un ID válido, cantidad positiva y descuento entre 0 y 1.
  if (!Array.isArray(items) || items.length === 0) {
    throw new HttpError(400, 'items debe ser un arreglo con al menos un producto');
  }
  for (const item of items) {
    parseId(item.producto_id, 'producto_id');
    if (!Number.isInteger(item.cantidad) || item.cantidad <= 0) {
      throw new HttpError(400, 'La cantidad de cada item debe ser un entero mayor a 0');
    }
    if (item.descuento !== undefined && (typeof item.descuento !== 'number' || item.descuento < 0 || item.descuento > 1)) {
      throw new HttpError(400, 'El descuento debe estar entre 0 y 1 (ej: 0.10 = 10%)');
    }
  }

  const id = await Pedido.crear(req.body);
  res.status(201).json(await Pedido.obtener(id));
});

// Cambia el estado y devuelve el pedido actualizado.
const actualizarEstado = asyncHandler(async (req, res) => {
  const id = parseId(req.params.id);
  requerir(req.body, ['estado']);
  if (!ESTADOS.includes(req.body.estado)) {
    throw new HttpError(400, `Estado inválido. Valores posibles: ${ESTADOS.join(', ')}`);
  }
  await buscarOFallar(id);
  await Pedido.actualizarEstado(id, req.body.estado);
  res.json(await Pedido.obtener(id));
});


// Elimina el pedido existente; sus detalles dependen de la regla de cascada de la base.
const eliminar = asyncHandler(async (req, res) => {
  const id = parseId(req.params.id);
  await buscarOFallar(id);
  await Pedido.eliminar(id);
  res.json({ mensaje: 'Pedido eliminado correctamente' });
});

// Agrupa ventas no canceladas por cliente.
const reportePorCliente = asyncHandler(async (req, res) => {
  res.json(await Pedido.reportePorCliente());
});


// Agrupa ventas no canceladas por empleado.
const reportePorEmpleado = asyncHandler(async (req, res) => {
  res.json(await Pedido.reportePorEmpleado());
});

export {
  listar,
  obtener,
  crear,
  actualizarEstado,
  eliminar,
  reportePorCliente,
  reportePorEmpleado
};
