import type { ErrorRequestHandler, RequestHandler } from 'express';
import { Prisma } from '../generated/prisma/client.js';
import { HttpError } from '../utils/http.js';

// Errores de MySQL traducidos a mensajes controlados (nunca se expone el SQL)
const ERRORES_MYSQL: Record<string, [number, string]> = {
  ER_DUP_ENTRY: [400, 'Ya existe un registro con ese valor único'],
  ER_NO_REFERENCED_ROW_2: [400, 'Referencia inválida: un id relacionado no existe'],
  ER_ROW_IS_REFERENCED_2: [400, 'No se puede eliminar: el registro está siendo usado por otros'],
  ER_BAD_NULL_ERROR: [400, 'Falta un campo obligatorio'],
  ER_DATA_TOO_LONG: [400, 'Algún valor es demasiado largo'],
  ER_CHECK_CONSTRAINT_VIOLATED: [400, 'Algún valor no cumple las restricciones'],
  ER_TRUNCATED_WRONG_VALUE: [400, 'Algún valor tiene un formato inválido'],
};

const noEncontrada: RequestHandler = (req, res) => {
  res.status(404).json({ error: 'Ruta no encontrada' });
};

// eslint-disable-next-line no-unused-vars
const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  if (err instanceof HttpError) {
    return res.status(err.status).json({ error: err.message });
  }
  if (err.type === 'entity.parse.failed') {
    return res.status(400).json({ error: 'El JSON enviado es inválido' });
  }
  const errorMySql = err.code ? ERRORES_MYSQL[err.code] : undefined;
  if (errorMySql) {
    const [status, mensaje] = errorMySql;
    return res.status(status).json({ error: mensaje });
  }
  if (err instanceof Prisma.PrismaClientKnownRequestError) {
    if (err.code === 'P2025') {
      return res.status(404).json({ error: 'Registro no encontrado' });
    }
    if (err.code === 'P2002') {
      return res.status(409).json({ error: 'Ya existe un registro con ese valor único' });
    }
    if (err.code === 'P2003') {
      return res.status(400).json({ error: 'Referencia inválida: un id relacionado no existe' });
    }
  }
  // Cualquier otro error: se loguea en el servidor, el cliente recibe un mensaje genérico
  console.error(err);
  res.status(500).json({ error: 'Error interno del servidor' });
};

export { errorHandler, noEncontrada };