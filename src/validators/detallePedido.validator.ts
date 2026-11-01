import { body, param } from 'express-validator';
import { validateRequest } from '../middlewares/validateRequest.js';

export const validarCrearDetallePedido = [
  body('producto_id').isInt({ min: 1 }).withMessage('El ID del producto debe ser positivo'),
  body('cantidad').isInt({ min: 1 }).withMessage('La cantidad debe ser un entero mayor a 0'),
  body('descuento')
    .optional()
    .isFloat({ min: 0, max: 1 })
    .withMessage('El descuento debe estar entre 0 y 1'),
  validateRequest
];

export const validarActualizarDetallePedido = [
  body('cantidad').isInt({ min: 1 }).withMessage('La cantidad debe ser un entero mayor a 0'),
  body('precio_unitario')
    .isFloat({ min: 0 })
    .withMessage('El precio unitario debe ser un número mayor o igual a 0'),
  body('descuento')
    .optional()
    .isFloat({ min: 0, max: 1 })
    .withMessage('El descuento debe estar entre 0 y 1'),
  validateRequest
];

export const obtenerProductoIDValidator = [
  param('productoId')
    .isInt({ gt: 0 }).withMessage('El ID del producto debe ser un entero positivo'),
  validateRequest
];