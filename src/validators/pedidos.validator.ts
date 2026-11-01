import {body, param} from "express-validator"
import { validateRequest } from '../middlewares/validateRequest.js';

export const validarPedido = [

    body('fecha_pedido')
        .optional()
        .isISO8601()
        .withMessage('La fecha del pedido debe tener un formato válido'),

    body('fecha_envio')
        .optional({ nullable: true })
        .isISO8601()
        .withMessage('La fecha de envío debe tener un formato válido'),

    body('estado')
        .notEmpty()
        .withMessage('El estado del pedido es obligatorio')
        .isIn(['pendiente', 'procesando', 'enviado', 'entregado', 'cancelado'])
        .withMessage('El estado del pedido no es válido'),

    body('costo_envio')
        .notEmpty()
        .withMessage('El costo de envío es obligatorio')
        .isFloat({ min: 0 })
        .withMessage('El costo de envío debe ser un número mayor o igual a cero'),

    body('cliente_id')
        .notEmpty()
        .withMessage('El cliente es obligatorio')
        .isInt({ min: 1 })
        .withMessage('El ID del cliente debe ser un número entero positivo'),

    body('empleado_id')
        .notEmpty()
        .withMessage('El empleado es obligatorio')
        .isInt({ min: 1 })
        .withMessage('El ID del empleado debe ser un número entero positivo'),

    body('compania_envio_id')
        .notEmpty()
        .withMessage('La compañía de envío es obligatoria')
        .isInt({ min: 1 })
        .withMessage('El ID de la compañía de envío debe ser un número entero positivo'),
]

export const obtenerIDValidator = [
  param('id')
    .isInt({ gt: 0 }).withMessage('El ID en la URL debe ser un número entero válido'),
  validateRequest
];