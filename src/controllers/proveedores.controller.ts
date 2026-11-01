// controllers/proveedores.controller.ts
import * as Proveedor from '../models/proveedores.model.js';
import { HttpError, asyncHandler, parseId, requerir } from '../utils/http.js';

const CAMPOS_PERMITIDOS = [
  'nombre',
  'contacto',
  'telefono',
  'email',
  'direccion',
  'ciudad',
  'activo'
];

const CAMPOS_TEXTO = [
  'nombre',
  'contacto',
  'telefono',
  'email',
  'direccion',
  'ciudad'
];

const buscarOFallar = async (id: number) => {
  const proveedor = await Proveedor.obtener(id);

  if (!proveedor) {
    throw new HttpError(404, 'Proveedor no encontrado');
  }

  return proveedor;
};

// Rechaza propiedades desconocidas y comprueba tipos básicos antes de persistir.
const validarCampos = (body: Record<string, unknown>) => {
  const camposEnviados = Object.keys(body);

  const camposNoPermitidos = camposEnviados.filter(
    (campo) => !CAMPOS_PERMITIDOS.includes(campo)
  );

  if (camposNoPermitidos.length) {
    throw new HttpError(
      400,
      `Campos no permitidos: ${camposNoPermitidos.join(', ')}`
    );
  }

  for (const campo of CAMPOS_TEXTO) {
    const valor = body[campo];
    if (valor !== undefined && (typeof valor !== 'string' || valor.trim() === '')) {
      throw new HttpError(400, `El campo ${campo} debe ser un texto no vacío`);
    }
  }

  if (body.activo !== undefined && typeof body.activo !== 'boolean') {
    throw new HttpError(400, 'El campo activo debe ser true o false');
  }
};

// GET colección: admite filtros por ciudad y texto del nombre.
const listar = asyncHandler(async (req, res) => {
  const { ciudad, q } = req.query;

  res.json(
    await Proveedor.listar({
      ciudad,
      q
    })
  );
});


// GET por ID y GET de productos del proveedor comparten la comprobación de existencia.
const obtener = asyncHandler(async (req, res) => {
  res.json(await buscarOFallar(parseId(req.params.id)));
});

const productosDe = asyncHandler(async (req, res) => {
  const id = parseId(req.params.id);

  await buscarOFallar(id);

  res.json(await Proveedor.productosDe(id));
});

// POST: exige el nombre y devuelve datos del proveedor recién creado.
const crear = asyncHandler(async (req, res) => {
  requerir(req.body, ['nombre']);
  validarCampos(req.body);

  const id = await Proveedor.crear(req.body);

  res.status(201).json({
    mensaje: 'Proveedor creado correctamente',
    proveedor: await buscarOFallar(id)
  });
});

// Actualizar un proveedor
const actualizar = asyncHandler(async (req, res) => {
  const id = parseId(req.params.id);
// Validar los campos permitidos y requeridos
  requerir(req.body, CAMPOS_TEXTO);
  // Validar los campos enviados
  validarCampos(req.body);
  // Verificar que el proveedor existe
  await buscarOFallar(id);
  // Actualizar el proveedor con los datos proporcionados
  const proveedor = await Proveedor.actualizar(id, req.body);
  // Devolver la respuesta con el proveedor actualizado
  res.json({
    mensaje: 'Proveedor actualizado correctamente',
    proveedor
  });
});

// Eliminar un proveedor
const eliminar = asyncHandler(async (req, res) => {
  const id = parseId(req.params.id);

  await buscarOFallar(id);
  await Proveedor.eliminar(id);

  res.json({
    mensaje: 'Proveedor eliminado correctamente'
  });
});

// Exportar las funciones del controlador
export {
  listar,
  obtener,
  productosDe,
  crear,
  actualizar,
  eliminar
};