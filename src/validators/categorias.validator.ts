import { body, param } from 'express-validator';
import { validateRequest } from '../middlewares/validateRequest.js';

export const createCategoriasValidator = [
  body('nombre')
    .notEmpty().withMessage('El nombre es obligatorio')
    .isString().withMessage('El nombre debe ser una cadena de texto')
    .trim(),
  body('descripcion')
    .isInt({ gt: 0 }).withMessage('El ID de categoría debe ser válido'),
  validateRequest
];

export const obtenerIDValidator = [
  param('id')
    .isInt({ gt: 0 }).withMessage('El ID en la URL debe ser un número entero válido'),
  validateRequest
];