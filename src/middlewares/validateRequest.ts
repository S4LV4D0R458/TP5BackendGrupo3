import type { RequestHandler } from 'express';
import { validationResult } from 'express-validator';

// Convierte los errores acumulados por express-validator en una respuesta HTTP 400.
export const validateRequest: RequestHandler = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).json({
      success: false,
      errors: errors.array().map(err => ({
        campo: err.type === 'field' ? err.path : undefined,
        mensaje: err.msg
      }))
    });
    return;
  }
  // Si no hay errores, permite continuar al siguiente middleware de la ruta.
  next();

};