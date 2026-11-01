import { body, param } from 'express-validator';
import { validateRequest } from '../middlewares/validateRequest.js';

export const validarCompaniaEnvio = [

    body('nombre')
        .notEmpty()
        .withMessage('El nombre de la compañía es obligatorio')
        .isString()
        .withMessage('El nombre debe ser un texto')
        .isLength({ min: 2, max: 100 })
        .withMessage('El nombre debe tener entre 2 y 100 caracteres'),

    body('telefono')
        .optional({ nullable: true })
        .isMobilePhone('any')
        .withMessage('El teléfono no es válido'),

    body('email')
        .optional({ nullable: true })
        .isEmail()
        .withMessage('El email no es válido')
];

export const obtenerIDValidator = [
    param('id')
    .isInt({ gt: 0 }).withMessage('El ID en la URL debe ser un número entero válido'),
    validateRequest
];