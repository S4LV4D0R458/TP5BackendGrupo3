import * as Producto from '../models/productos.model.js';
import { HttpError, asyncHandler, parseId, numOpcional, requerir } from '../utils/http.js';
import type { DatosProducto } from '../models/productos.model.js';

const validarBody: (body: unknown) => asserts body is DatosProducto = (body) => {
  requerir(body, ['nombre', 'precio', 'proveedor_id']);
  if (!body || typeof body !== 'object' || Array.isArray(body)) {
    throw new HttpError(400, 'El cuerpo de la solicitud debe ser un objeto JSON');
  }

  const datos = body as Record<string, unknown>;

  // El campo sigue siendo obligatorio en la solicitud, aunque se permite enviarlo como null.
  if (datos.categoria_id === undefined || datos.categoria_id === '') {
    throw new HttpError(400, 'Faltan campos obligatorios: categoria_id');
  }
  if (typeof datos.nombre !== 'string') {
    throw new HttpError(400, 'El nombre debe ser un texto');
  }
  if (typeof datos.precio !== 'number' || datos.precio < 0) {
    throw new HttpError(400, 'El precio debe ser un número mayor o igual a 0');
  }
  if (
    datos.descripcion !== undefined &&
    datos.descripcion !== null &&
    typeof datos.descripcion !== 'string'
  ) {
    throw new HttpError(400, 'La descripción debe ser un texto o null');
  }
  if (datos.stock !== undefined && (
    typeof datos.stock !== 'number' ||
    !Number.isInteger(datos.stock) ||
    datos.stock < 0
  )) {
    throw new HttpError(400, 'El stock debe ser un entero mayor o igual a 0');
  }
  if (typeof datos.proveedor_id !== 'number') {
    throw new HttpError(400, 'El campo proveedor_id debe ser un entero positivo');
  }
  parseId(datos.proveedor_id, 'proveedor_id');
  // La categoría puede ser null si fue eliminada y la FK aplicó ON DELETE SET NULL.
  if (datos.categoria_id !== null) parseId(datos.categoria_id, 'categoria_id');
  if (datos.activo !== undefined && typeof datos.activo !== 'boolean') {
    throw new HttpError(400, 'El campo activo debe ser booleano');
  }
};

const buscarOFallar = async (id: number) => {
  const producto = await Producto.obtener(id);
  if (!producto) throw new HttpError(404, 'Producto no encontrado');
  return producto;
};

const listar = asyncHandler(async (req, res) => {
  const categoriaId = numOpcional(req.query.categoria_id, 'categoria_id');
  const proveedorId = numOpcional(req.query.proveedor_id, 'proveedor_id');
  const precioMin = numOpcional(req.query.precio_min, 'precio_min');
  const precioMax = numOpcional(req.query.precio_max, 'precio_max');

  const filtros = {
    ...(categoriaId !== undefined && { categoria_id: categoriaId }),
    ...(proveedorId !== undefined && { proveedor_id: proveedorId }),
    ...(precioMin !== undefined && { precio_min: precioMin }),
    ...(precioMax !== undefined && { precio_max: precioMax }),
    ...(typeof req.query.q === 'string' && { q: req.query.q }),
  };
  res.json(await Producto.listar(filtros));
});

const obtener = asyncHandler(async (req, res) => {
  res.json(await buscarOFallar(parseId(req.params.id)));
});

const stockBajo = asyncHandler(async (req, res) => {
  const limite = numOpcional(req.query.limite, 'limite') ?? 20;
  res.json(await Producto.stockBajo(limite));
});

const resumenPorCategoria = asyncHandler(async (req, res) => {
  res.json(await Producto.resumenPorCategoria());
});

const crear = asyncHandler(async (req, res) => {
  validarBody(req.body);
  const id = await Producto.crear(req.body);
  res.status(201).json(await Producto.obtener(id));
});

const actualizar = asyncHandler(async (req, res) => {
  const id = parseId(req.params.id);
  validarBody(req.body);
  await buscarOFallar(id);
  await Producto.actualizar(id, req.body);
  res.json(await Producto.obtener(id));
});

const eliminar = asyncHandler(async (req, res) => {
  const id = parseId(req.params.id);
  await buscarOFallar(id);
  await Producto.eliminar(id);
  res.json({ mensaje: 'Producto eliminado correctamente' });
});

export { listar, obtener, stockBajo, resumenPorCategoria, crear, actualizar, eliminar };
