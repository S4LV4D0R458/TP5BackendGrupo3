import { body, param } from 'express-validator';
import { validateRequest } from '../middlewares/validateRequest.js';

export const createProductoValidator = [
  body('nombre')
    .notEmpty().withMessage('El nombre es obligatorio')
    .isString().withMessage('El nombre debe ser una cadena de texto')
    .trim(),
  body('precio')
    .isFloat({ gt: 0 }).withMessage('El precio debe ser un número mayor a 0'),
  body('stock')
    .isInt({ min: 0 }).withMessage('El stock debe ser un entero mayor o igual a 0'),
  body('categoriaId')
    .isInt({ gt: 0 }).withMessage('El ID de categoría debe ser válido'),
  validateRequest
];

export const obtenerIDValidator = [
  param('id')
    .isInt({ gt: 0 }).withMessage('El ID en la URL debe ser un número entero válido'),
  validateRequest
];