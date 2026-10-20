import * as Empleado from '../models/empleados.model.js';
import { HttpError, asyncHandler, parseId, requerir } from '../utils/http.js';
import type { DatosEmpleadoParcial } from '../models/empleados.model.js';

const buscarOFallar = async (id: number) => {
  try {
    const empleado = await Empleado.obtener(id);
    return empleado;
  } catch(e) {
    throw new HttpError(404, "Empleado no encontrado");
  }
};

const listar = asyncHandler(async (req, res) => {
  res.json(await Empleado.listar());
});

const obtener = asyncHandler(async (req, res) => {
  res.json(await buscarOFallar(parseId(req.params.id)));
});

const crear = asyncHandler(async (req, res) => {
  requerir(req.body, ['nombre', 'apellido']);
  const id = await Empleado.crear(req.body);
  res.status(201).json({
    mensaje: 'Empleado creado correctamente',
    empleado: await Empleado.obtener(id)
  });
});

const actualizar = asyncHandler(async (req, res) => {
  const id = parseId(req.params.id);
  requerir(req.body, ['nombre', 'apellido']);
  await buscarOFallar(id);
  const empleado = await Empleado.actualizar(id, req.body);
  res.json({
    mensaje: 'Empleado actualizado correctamente',
    empleado
  });
});

const actualizarParcial = asyncHandler(async (req, res) => {
  const id = parseId(req.params.id);
  requerir(req.body, []);

  const camposPermitidos = [
    'nombre',
    'apellido',
    'cargo',
    'email',
    'telefono',
    'fecha_ingreso',
  ];
  const datos = req.body as Record<string, unknown>;
  const camposEnviados = Object.keys(datos);
  const camposNoPermitidos = camposEnviados.filter(
    (campo) => !camposPermitidos.includes(campo),
  );

  if (camposNoPermitidos.length) {
    throw new HttpError(400, `Campos no permitidos: ${camposNoPermitidos.join(', ')}`);
  }
  if (!camposEnviados.length) {
    throw new HttpError(400, 'Debe enviar al menos un campo para actualizar');
  }
  if (
    (datos.nombre !== undefined &&
      (typeof datos.nombre !== 'string' || datos.nombre.trim() === '')) ||
    (datos.apellido !== undefined &&
      (typeof datos.apellido !== 'string' || datos.apellido.trim() === ''))
  ) {
    throw new HttpError(400, 'Nombre y apellido deben ser textos no vacíos');
  }
  for (const campo of ['cargo', 'email', 'telefono'] as const) {
    const valor = datos[campo];
    if (valor !== undefined && valor !== null && typeof valor !== 'string') {
      throw new HttpError(400, `El campo ${campo} debe ser texto o null`);
    }
  }
  const fechaIngreso = datos.fecha_ingreso;
  if (
    fechaIngreso !== undefined &&
    fechaIngreso !== null &&
    (typeof fechaIngreso !== 'string' || Number.isNaN(Date.parse(fechaIngreso)))
  ) {
    throw new HttpError(400, 'El campo fecha_ingreso debe ser una fecha válida o null');
  }

  await buscarOFallar(id);
  const empleado = await Empleado.actualizarParcial(
    id,
    datos as DatosEmpleadoParcial,
  );
  res.json({
    mensaje: 'Empleado actualizado correctamente',
    empleado,
  });
});

const eliminar = asyncHandler(async (req, res) => {
  const id = parseId(req.params.id);
  await buscarOFallar(id);
  await Empleado.eliminar(id);
  res.json({ mensaje: 'Empleado eliminado correctamente' });
});

export { listar, obtener, crear, actualizar, actualizarParcial, eliminar };
