import { body, param } from 'express-validator';
import { validateRequest } from '../middlewares/validateRequest.js';
export const validarEmpleado = [
    body('nombre')
        .notEmpty().withMessage('El nombre es obligatorio')
        .isString().withMessage('El nombre debe ser un texto')
        .isLength({ min: 2, max: 50 })
        .withMessage('El nombre debe tener entre 2 y 50 caracteres'),
    body('apellido')
        .notEmpty().withMessage('El apellido es obligatorio')
        .isString().withMessage('El apellido debe ser un texto')
        .isLength({ min: 2, max: 50 })
        .withMessage('El apellido debe tener entre 2 y 50 caracteres'),
    body('cargo')
        .optional({ nullable: true })
        .isString().withMessage('El cargo debe ser un texto'),
    body('email')
        .optional({ nullable: true })
        .isEmail().withMessage('El email no es válido'),
    body('telefono')
        .optional({ nullable: true })
        .isMobilePhone('any')
        .withMessage('El teléfono no es válido'),
    body('fecha_ingreso')
        .optional({ nullable: true })
        .isISO8601().withMessage('La fecha de ingreso debe tener un formato de fecha válido'),
    validateRequest
];
export const validarEmpleadoParcial = [
    body('nombre')
        .optional()
        .isString().withMessage('El nombre debe ser un texto')
        .notEmpty().withMessage('El nombre no puede estar vacío'),
    body('apellido')
        .optional()
        .isString().withMessage('El apellido debe ser un texto')
        .notEmpty().withMessage('El apellido no puede estar vacío'),
    body('cargo')
        .optional({ nullable: true })
        .isString().withMessage('El cargo debe ser un texto'),
    body('email')
        .optional({ nullable: true })
        .isEmail().withMessage('El email no es válido'),
    body('telefono')
        .optional({ nullable: true })
        .isMobilePhone('any').withMessage('El teléfono no es válido'),
    body('fecha_ingreso')
        .optional({ nullable: true })
        .isISO8601().withMessage('La fecha de ingreso debe tener un formato válido'),
    validateRequest
];
export const obtenerIDValidator = [
    param('id')
        .isInt({ gt: 0 }).withMessage('El ID en la URL debe ser un número entero válido'),
    validateRequest
];
//# sourceMappingURL=empleados.validator.js.map