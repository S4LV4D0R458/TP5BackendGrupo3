import { body, param } from 'express-validator';
import { validateRequest } from '../middlewares/validateRequest.js';

export const validarDetallePedido = [
  body('pedidoId')
    .notEmpty().withMessage('El pedidoId es obligatorio')
    .isInt({ gt: 0 }).withMessage('pedidoId debe ser un número entero válido'),

  body('productoId')
    .notEmpty().withMessage('El productoId es obligatorio')
    .isInt({ gt: 0 }).withMessage('productoId debe ser un número entero válido'),

  body('cantidad')
    .notEmpty().withMessage('La cantidad es obligatoria')
    .isInt({ min: 1 }).withMessage('La cantidad debe ser como mínimo 1'),

  body('precioUnitario')
    .notEmpty().withMessage('El precioUnitario es obligatorio')
    .isFloat({ gt: 0 }).withMessage('El precio unitario debe ser un valor positivo'),

  body('descuento')
    .optional()
    .isFloat({ min: 0, max: 1 }).withMessage('El descuento debe estar expresado entre 0 y 1 (ej: 0.15 para 15%)'),

  validateRequest
];

export const obtenerIDValidator = [
    param('id')
    .isInt({ gt: 0 }).withMessage('El ID en la URL debe ser un número entero válido'),
    validateRequest
];