import { body, param } from 'express-validator';
import { validateRequest } from '../middlewares/validateRequest.js';
export const validarCrearPedido = [
    body('cliente_id').isInt({ min: 1 }).withMessage('El ID del cliente debe ser positivo'),
    body('empleado_id').isInt({ min: 1 }).withMessage('El ID del empleado debe ser positivo'),
    body('compania_envio_id').isInt({ min: 1 }).withMessage('El ID de la compañía debe ser positivo'),
    body('items').isArray({ min: 1 }).withMessage('items debe contener al menos un producto'),
    body('items.*.producto_id').isInt({ min: 1 }).withMessage('El ID del producto debe ser positivo'),
    body('items.*.cantidad').isInt({ min: 1 }).withMessage('La cantidad debe ser un entero mayor a 0'),
    body('items.*.descuento')
        .optional()
        .isFloat({ min: 0, max: 1 })
        .withMessage('El descuento debe estar entre 0 y 1'),
    validateRequest
];
export const validarActualizarEstadoPedido = [
    body('estado')
        .isIn(['pendiente', 'enviado', 'entregado', 'cancelado'])
        .withMessage('El estado del pedido no es válido'),
    validateRequest
];
export const obtenerIDValidator = [
    param('id')
        .isInt({ gt: 0 }).withMessage('El ID en la URL debe ser un número entero válido'),
    validateRequest
];
export const obtenerPedidoIDValidator = [
    param('pedidoId')
        .isInt({ gt: 0 }).withMessage('El ID del pedido debe ser un entero positivo'),
    validateRequest
];
//# sourceMappingURL=pedidos.validator.js.map