import { body, param } from 'express-validator';
import { validateRequest } from '../middlewares/validateRequest.js';


export const validarCliente = [
    body('nombre')
        .notEmpty().withMessage('El nombre es obligatorio')
        .isString().withMessage('El nombre debe ser un texto')
        .isLength({ min: 2, max: 50 })
        .withMessage('El nombre debe tener entre 2 y 50 caracteres'),

    body('apellido')
        .optional({ nullable: true })
        .isString().withMessage('El apellido debe ser un texto'),

    body('empresa')
        .optional({ nullable: true })
        .isString().withMessage('La empresa debe ser un texto'),

    body('telefono')
        .optional({ nullable: true })
        .isMobilePhone('any')
        .withMessage('El teléfono no es válido'),

    body('email')
        .optional({ nullable: true })
        .isEmail().withMessage('El email no es válido'),

    body('direccion')
        .optional({ nullable: true })
        .isString().withMessage('La dirección debe ser un texto'),

    body('ciudad')
        .optional({ nullable: true })
        .isString().withMessage('La ciudad debe ser un texto'),
    validateRequest
];

export const obtenerIDValidator = [
    param('id')
    .isInt({ gt: 0 }).withMessage('El ID en la URL debe ser un número entero válido'),
    validateRequest
];