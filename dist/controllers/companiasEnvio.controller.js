import * as CompaniaEnvio from '../models/companiasEnvio.model.js';
import { HttpError, asyncHandler, parseId, requerir } from '../utils/http.js';
// Validación de datos de la compañía de envío
const buscarOFallar = async (id) => {
    const compania = await CompaniaEnvio.obtener(id);
    if (!compania)
        throw new HttpError(404, 'Compañía de envío no encontrada');
    return compania;
};
// GET colección: devuelve las compañías ordenadas por la capa de datos.
const listar = asyncHandler(async (req, res) => {
    res.json(await CompaniaEnvio.listar());
});
// GET por ID: comprueba que exista antes de responder.
const obtener = asyncHandler(async (req, res) => {
    res.json(await buscarOFallar(parseId(req.params.id)));
});
// POST: crea una compañía y devuelve el registro mediante su ID recién asignado.
const crear = asyncHandler(async (req, res) => {
    requerir(req.body, ['nombre']);
    const id = await CompaniaEnvio.crear(req.body);
    res.status(201).json(await CompaniaEnvio.obtener(id));
});
// PUT: exige el nombre, valida existencia y actualiza el registro.
const actualizar = asyncHandler(async (req, res) => {
    const id = parseId(req.params.id);
    requerir(req.body, ['nombre']);
    await buscarOFallar(id);
    await CompaniaEnvio.actualizar(id, req.body);
    res.json(await CompaniaEnvio.obtener(id));
});
// DELETE: evita eliminar un ID inexistente y confirma el resultado.
const eliminar = asyncHandler(async (req, res) => {
    const id = parseId(req.params.id);
    await buscarOFallar(id);
    await CompaniaEnvio.eliminar(id);
    res.json({ mensaje: 'Compañía de envío eliminada correctamente' });
});
export { listar, obtener, crear, actualizar, eliminar };
//# sourceMappingURL=companiasEnvio.controller.js.map