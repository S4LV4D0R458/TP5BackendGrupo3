import * as Empleado from '../models/empleados.model.js';
import { HttpError, asyncHandler, parseId, requerir } from '../utils/http.js';
const buscarOFallar = async (id) => {
    try {
        const empleado = await Empleado.obtener(id);
        return empleado;
    }
    catch (e) {
        throw new HttpError(404, "Empleado no encontrado");
    }
};
// GET colección: presenta el listado generado por el modelo.
const listar = asyncHandler(async (req, res) => {
    res.json(await Empleado.listar());
});
// GET por ID: busca el empleado indicado.
const obtener = asyncHandler(async (req, res) => {
    res.json(await buscarOFallar(parseId(req.params.id)));
});
// POST: nombre y apellido son obligatorios; devuelve el registro creado.
const crear = asyncHandler(async (req, res) => {
    requerir(req.body, ['nombre', 'apellido']);
    const id = await Empleado.crear(req.body);
    res.status(201).json({
        mensaje: 'Empleado creado correctamente',
        empleado: await Empleado.obtener(id)
    });
});
// PUT: actualiza los campos del empleado como una operación completa.
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
// PATCH: valida únicamente los campos enviados y conserva sin cambios los omitidos.
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
    const datos = req.body;
    const camposEnviados = Object.keys(datos);
    const camposNoPermitidos = camposEnviados.filter((campo) => !camposPermitidos.includes(campo));
    // Validación de los campos enviados
    if (camposNoPermitidos.length) {
        throw new HttpError(400, `Campos no permitidos: ${camposNoPermitidos.join(', ')}`);
    }
    if (!camposEnviados.length) {
        throw new HttpError(400, 'Debe enviar al menos un campo para actualizar');
    }
    if ((datos.nombre !== undefined &&
        (typeof datos.nombre !== 'string' || datos.nombre.trim() === '')) ||
        (datos.apellido !== undefined &&
            (typeof datos.apellido !== 'string' || datos.apellido.trim() === ''))) {
        throw new HttpError(400, 'Nombre y apellido deben ser textos no vacíos');
    }
    for (const campo of ['cargo', 'email', 'telefono']) {
        const valor = datos[campo];
        if (valor !== undefined && valor !== null && typeof valor !== 'string') {
            throw new HttpError(400, `El campo ${campo} debe ser texto o null`);
        }
    }
    const fechaIngreso = datos.fecha_ingreso;
    if (fechaIngreso !== undefined &&
        fechaIngreso !== null &&
        (typeof fechaIngreso !== 'string' || Number.isNaN(Date.parse(fechaIngreso)))) {
        throw new HttpError(400, 'El campo fecha_ingreso debe ser una fecha válida o null');
    }
    // Verifica que el empleado exista antes de actualizar
    await buscarOFallar(id);
    const empleado = await Empleado.actualizarParcial(id, datos);
    res.json({
        mensaje: 'Empleado actualizado correctamente',
        empleado,
    });
});
// DELETE: valida existencia y borra al empleado.
const eliminar = asyncHandler(async (req, res) => {
    const id = parseId(req.params.id);
    await buscarOFallar(id);
    if (await Empleado.tieneVentas(id)) {
        throw new HttpError(409, 'No se puede eliminar el empleado porque tiene ventas asociadas');
    }
    await Empleado.eliminar(id);
    res.json({ mensaje: 'Empleado eliminado correctamente' });
});
export { listar, obtener, crear, actualizar, actualizarParcial, eliminar };
//# sourceMappingURL=empleados.controller.js.map