import { body, param } from 'express-validator';
import { validateRequest } from '../middlewares/validateRequest.js';
// Reglas de entrada declaradas para nombre y descripción de categorías.
export const createCategoriasValidator = [
    body('nombre')
        .notEmpty().withMessage('El nombre es obligatorio')
        .isString().withMessage('El nombre debe ser una cadena de texto')
        .isLength({ max: 80 }).withMessage('El nombre no debe superar los 80 caracteres')
        .trim(),
    body('descripcion')
        .optional({ nullable: true })
        .isString().withMessage('La descripción debe ser una cadena de texto')
        .isLength({ max: 200 }).withMessage('La descripción no debe superar los 200 caracteres'),
    validateRequest
];
export const obtenerIDValidator = [
    // El identificador de la ruta debe ser un entero positivo.
    param('id')
        .isInt({ gt: 0 }).withMessage('El ID en la URL debe ser un número entero válido'),
    validateRequest
];
//# sourceMappingURL=categorias.validator.js.map