import * as CompaniaEnvio from '../models/companiasEnvio.model.js';
import { HttpError, asyncHandler, parseId, requerir } from '../utils/http.js';

const buscarOFallar = async (id: number) => {
  const compania = await CompaniaEnvio.obtener(id);
  if (!compania) throw new HttpError(404, 'Compañía de envío no encontrada');
  return compania;
};

const listar = asyncHandler(async (req, res) => {
  res.json(await CompaniaEnvio.listar());
});

const obtener = asyncHandler(async (req, res) => {
  res.json(await buscarOFallar(parseId(req.params.id)));
});

const crear = asyncHandler(async (req, res) => {
  requerir(req.body, ['nombre']);
  const id = await CompaniaEnvio.crear(req.body);
  res.status(201).json(await CompaniaEnvio.obtener(id));
});

const actualizar = asyncHandler(async (req, res) => {
  const id = parseId(req.params.id);
  requerir(req.body, ['nombre']);
  await buscarOFallar(id);
  await CompaniaEnvio.actualizar(id, req.body);
  res.json(await CompaniaEnvio.obtener(id));
});

const eliminar = asyncHandler(async (req, res) => {
  const id = parseId(req.params.id);
  await buscarOFallar(id);
  await CompaniaEnvio.eliminar(id);
  res.json({ mensaje: 'Compañía de envío eliminada correctamente' });
});

export { listar, obtener, crear, actualizar, eliminar };
