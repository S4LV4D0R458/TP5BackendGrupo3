import { query } from 'express-validator';
import { validateRequest } from '../middlewares/validateRequest.js';
export const validarReportes = [
    query('limite')
        .optional()
        .isInt({ min: 1, max: 100 })
        .withMessage('El límite debe ser un entero entre 1 y 100'),
    validateRequest
];
//# sourceMappingURL=reportes.validator.js.map