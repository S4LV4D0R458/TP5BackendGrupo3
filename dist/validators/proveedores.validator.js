import { body, param } from "express-validator";
import { validateRequest } from '../middlewares/validateRequest.js';
export const validarProveedores = [
    body('nombre')
        .notEmpty().withMessage('El nombre del proveedor es obligatorio')
        .isString().withMessage('El nombre debe ser un texto')
        .isLength({ min: 2, max: 100 })
        .withMessage('El nombre debe tener entre 2 y 100 caracteres'),
    body('contacto')
        .optional({ nullable: true })
        .isString().withMessage('El contacto debe ser un texto'),
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
    body('activo')
        .optional()
        .isBoolean().withMessage('El campo activo debe ser verdadero o falso'),
    validateRequest
];
export const obtenerIDValidator = [
    param('id')
        .isInt({ gt: 0 }).withMessage('El ID en la URL debe ser un número entero válido'),
    validateRequest
];
//# sourceMappingURL=proveedores.validator.js.map