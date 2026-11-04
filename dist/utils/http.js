// Error con código HTTP, para lanzarlo desde controladores y modelos
class HttpError extends Error {
    status;
    constructor(status, message) {
        super(message);
        this.status = status;
    }
}
// Envuelve controladores async para mandar los errores al middleware global
const asyncHandler = (fn) => (req, res, next) => Promise.resolve(fn(req, res, next)).catch(next);
// Convierte a entero positivo o lanza 400
const parseId = (valor, nombre = 'id') => {
    const n = Number(valor);
    if (!Number.isInteger(n) || n <= 0) {
        throw new HttpError(400, `El campo ${nombre} debe ser un entero positivo`);
    }
    return n;
};
// Número opcional (para filtros): devuelve undefined si no vino
const numOpcional = (valor, nombre) => {
    if (valor === undefined || valor === '')
        return undefined;
    const n = Number(valor);
    if (Number.isNaN(n))
        throw new HttpError(400, `El filtro ${nombre} debe ser numérico`);
    return n;
};
// Verifica que existan los campos obligatorios en el body
const requerir = (body, campos) => {
    if (!body || typeof body !== 'object' || Array.isArray(body)) {
        throw new HttpError(400, 'El cuerpo de la solicitud debe ser un objeto JSON');
    }
    const valores = body;
    const faltan = campos.filter((c) => valores[c] === undefined ||
        valores[c] === null ||
        (typeof valores[c] === 'string' && valores[c].trim() === ''));
    if (faltan.length) {
        throw new HttpError(400, `Faltan campos obligatorios: ${faltan.join(', ')}`);
    }
};
export { HttpError, asyncHandler, parseId, numOpcional, requerir };
//# sourceMappingURL=http.js.map