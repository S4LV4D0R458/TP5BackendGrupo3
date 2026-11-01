import * as DetallePedido from '../models/detallePedido.model.js';
import * as Pedido from '../models/pedidos.model.js';
import { HttpError, asyncHandler, parseId, requerir } from '../utils/http.js';

// Validación de datos del detalle del pedido
const validarCantidad = (cantidad: number) => {
  if (typeof cantidad !== 'number' || !Number.isInteger(cantidad) || cantidad <= 0) {
    throw new HttpError(400, 'La cantidad debe ser un entero mayor a 0');
  }
};

const validarDescuento = (descuento: number) => {
  if (descuento !== undefined && (typeof descuento !== 'number' || descuento < 0 || descuento > 1)) {
    throw new HttpError(400, 'El descuento debe estar entre 0 y 1 (ej: 0.10 = 10%)');
  }
};

// Validación de precio unitario
const validarPrecio = (precio: number) => {
  if (typeof precio !== 'number' || precio < 0) {
    throw new HttpError(400, 'El precio_unitario debe ser un número mayor o igual a 0');
  }
};

// Función para buscar un pedido por ID o lanzar un error 404 si no se encuentra
const buscarPedidoOFallar = async (pedidoId: number) => {
  const pedido = await Pedido.obtener(pedidoId);
  if (!pedido) throw new HttpError(404, 'Pedido no encontrado');
  return pedido;
};

// GET colección: comprueba primero el pedido padre y después lista sus productos.
const listar = asyncHandler(async (req, res) => {
  const pedidoId = parseId(req.params.pedidoId, 'pedidoId');
  await buscarPedidoOFallar(pedidoId);
  res.json(await DetallePedido.listar(pedidoId));
});

// GET por producto: el detalle se localiza con pedidoId y productoId.
const obtener = asyncHandler(async (req, res) => {
  const pedidoId = parseId(req.params.pedidoId, 'pedidoId');
  const productoId = parseId(req.params.productoId, 'productoId');
  await buscarPedidoOFallar(pedidoId);
  const detalle = await DetallePedido.obtener(pedidoId, productoId);
  if (!detalle) throw new HttpError(404, 'Detalle de pedido no encontrado');
  res.json(detalle);
});

// POST: valida datos del detalle y devuelve el detalle persistido.
const crear = asyncHandler(async (req, res) => {
  const pedidoId = parseId(req.params.pedidoId, 'pedidoId');
  requerir(req.body, ['producto_id', 'cantidad']);
  const productoId = parseId(req.body.producto_id, 'producto_id');
  validarCantidad(req.body.cantidad);
  validarDescuento(req.body.descuento);
  await buscarPedidoOFallar(pedidoId);
  await DetallePedido.crear(pedidoId, { ...req.body, producto_id: productoId });
  res.status(201).json(await DetallePedido.obtener(pedidoId, productoId));
});


// PUT: actualiza cantidad, precio y descuento del producto dentro del pedido.
const actualizar = asyncHandler(async (req, res) => {
  const pedidoId = parseId(req.params.pedidoId, 'pedidoId');
  const productoId = parseId(req.params.productoId, 'productoId');
  requerir(req.body, ['cantidad', 'precio_unitario']);
  validarCantidad(req.body.cantidad);
  validarPrecio(req.body.precio_unitario);
  validarDescuento(req.body.descuento);
  await buscarPedidoOFallar(pedidoId);
  await DetallePedido.actualizar(pedidoId, productoId, req.body);
  res.json(await DetallePedido.obtener(pedidoId, productoId));
});

// DELETE: elimina un producto del pedido tras comprobar el pedido padre.
const eliminar = asyncHandler(async (req, res) => {
  const pedidoId = parseId(req.params.pedidoId, 'pedidoId');
  const productoId = parseId(req.params.productoId, 'productoId');
  await buscarPedidoOFallar(pedidoId);
  await DetallePedido.eliminar(pedidoId, productoId);
  res.json({ mensaje: 'Detalle de pedido eliminado correctamente' });
});

export { listar, obtener, crear, actualizar, eliminar };
