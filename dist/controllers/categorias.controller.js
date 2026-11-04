import * as Categoria from '../models/categorias.model.js';
import { HttpError, asyncHandler, parseId, requerir } from '../utils/http.js';
const buscarOFallar = async (id) => {
    const categoria = await Categoria.obtener(id);
    if (!categoria)
        throw new HttpError(404, 'Categoría no encontrada');
    return categoria;
};
// GET colección: delega la consulta ordenada a la capa de modelo.
const listar = asyncHandler(async (_req, res) => {
    res.json(await Categoria.listar());
});
// GET por ID: valida el formato del ID y responde 404 cuando no existe la categoría.
const obtener = asyncHandler(async (req, res) => {
    res.json(await buscarOFallar(parseId(req.params.id)));
});
// POST: exige nombre y devuelve la categoría creada con estado 201.
const crear = asyncHandler(async (req, res) => {
    requerir(req.body, ['nombre']);
    const categoria = await Categoria.crear(req.body);
    res.status(201).json(categoria);
});
// PUT: comprueba que exista antes de reemplazar sus datos.
const actualizar = asyncHandler(async (req, res) => {
    const id = parseId(req.params.id);
    requerir(req.body, ['nombre']);
    await buscarOFallar(id);
    res.json(await Categoria.actualizar(id, req.body));
});
// DELETE: verifica existencia antes de borrar y devuelve un mensaje de confirmación.
const eliminar = asyncHandler(async (req, res) => {
    const id = parseId(req.params.id);
    await buscarOFallar(id);
    await Categoria.eliminar(id);
    res.json({ mensaje: 'Categoría eliminada correctamente' });
});
export default { listar, obtener, crear, actualizar, eliminar };
//# sourceMappingURL=categorias.controller.js.map