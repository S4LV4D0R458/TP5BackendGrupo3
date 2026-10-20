import * as Categoria from '../models/categorias.model.js';
import { HttpError, asyncHandler, parseId, requerir } from '../utils/http.js';


const buscarOFallar = async (id: number) => {
  const categoria = await Categoria.obtener(id);
  if (!categoria) throw new HttpError(404, 'Categoría no encontrada');
  return categoria;
};

const listar = asyncHandler(async (_req, res) => {
  res.json(await Categoria.listar());
});

const obtener = asyncHandler(async (req, res) => {
  res.json(await buscarOFallar(parseId(req.params.id)));
});

const crear = asyncHandler(async (req, res) => {
  requerir(req.body, ['nombre']);
  const categoria = await Categoria.crear(req.body);
  res.status(201).json(categoria);
});

const actualizar = asyncHandler(async (req, res) => {
  const id = parseId(req.params.id);
  requerir(req.body, ['nombre']);
  await buscarOFallar(id);
  res.json(await Categoria.actualizar(id, req.body));
});

const eliminar = asyncHandler(async (req, res) => {
  const id = parseId(req.params.id);
  await buscarOFallar(id);
  await Categoria.eliminar(id);
  res.json({ mensaje: 'Categoría eliminada correctamente' });
});

export default { listar, obtener, crear, actualizar, eliminar };
