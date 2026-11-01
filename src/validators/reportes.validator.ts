import {body, param} from "express-validator"
import { validateRequest } from '../middlewares/validateRequest.js';

export const validarReportes = [
     body('producto')
        .notEmpty()
        .withMessage('El nombre del producto es obligatorio')
        .isString()
        .withMessage('El producto debe ser un texto'),

    body('unidades_vendidas')
        .notEmpty()
        .withMessage('Las unidades vendidas son obligatorias')
        .isInt({ min: 0 })
        .withMessage('Las unidades vendidas deben ser un entero positivo'),

    body('pedidos_distintos')
        .notEmpty()
        .withMessage('La cantidad de pedidos es obligatoria')
        .isInt({ min: 0 })
        .withMessage('Los pedidos distintos deben ser un entero positivo'),
]

export const obtenerIDValidator = [
    param('id')
    .isInt({ gt: 0 }).withMessage('El ID en la URL debe ser un número entero válido'),
    validateRequest
];