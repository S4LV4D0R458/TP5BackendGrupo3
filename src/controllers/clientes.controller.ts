import * as Cliente from '../models/clientes.model.js';
import { HttpError, asyncHandler, parseId, requerir } from '../utils/http.js';

const CAMPOS_CLIENTE = [
  'nombre',
  'apellido',
  'empresa',
  'telefono',
  'email',
  'direccion',
  'ciudad',
];

const validarDatosCliente = (body: unknown) => {
  requerir(body, ['nombre']);
  if (!body || typeof body !== 'object' || Array.isArray(body)) {
    throw new HttpError(400, 'El cuerpo de la solicitud debe ser un objeto JSON');
  }

  const datos = body as Record<string, unknown>;
  const camposNoPermitidos = Object.keys(datos).filter(
    (campo) => !CAMPOS_CLIENTE.includes(campo),
  );
  if (camposNoPermitidos.length) {
    throw new HttpError(400, `Campos no permitidos: ${camposNoPermitidos.join(', ')}`);
  }

  if (typeof datos.nombre !== 'string' || datos.nombre.trim() === '') {
    throw new HttpError(400, 'El campo nombre debe ser un texto no vacío');
  }

  for (const campo of CAMPOS_CLIENTE.slice(1)) {
    const valor = datos[campo];
    if (valor !== undefined && valor !== null && typeof valor !== 'string') {
      throw new HttpError(400, `El campo ${campo} debe ser texto o null`);
    }
  }
};

const buscarOFallar = async (id: number) => {
  const cliente = await Cliente.obtener(id);
  if (!cliente) throw new HttpError(404, 'Cliente no encontrado');
  return cliente;
};

const listar = asyncHandler(async (req, res) => {
  res.json(await Cliente.listar());
});

const obtener = asyncHandler(async (req, res) => {
  res.json(await buscarOFallar(parseId(req.params.id)));
});

const crear = asyncHandler(async (req, res) => {
  validarDatosCliente(req.body);
  const id = await Cliente.crear(req.body);
  res.status(201).json(await Cliente.obtener(id));
});

const actualizar = asyncHandler(async (req, res) => {
  const id = parseId(req.params.id);
  requerir(req.body, ['nombre']);
  await buscarOFallar(id);
  await Cliente.actualizar(id, req.body);
  res.json(await Cliente.obtener(id));
});

const eliminar = asyncHandler(async (req, res) => {
  const id = parseId(req.params.id);
  await buscarOFallar(id);
  await Cliente.eliminar(id);
  res.json({ mensaje: 'Cliente eliminado correctamente' });
});

export { listar, obtener, crear, actualizar, eliminar };
