import express from 'express';
import * as ctrl from '../controllers/pedidos.controller.js';
import detallePedidoRoutes from './detallePedido.routes.js';
import {obtenerIDValidator, validarPedido} from "../validators/pedidos.validator.js"
const router = express.Router();

router.get('/reportes/clientes', ctrl.reportePorCliente, obtenerIDValidator, validarPedido);
router.get('/reportes/empleados', ctrl.reportePorEmpleado, obtenerIDValidator, validarPedido);
router.use('/:pedidoId/detalle', detallePedidoRoutes, obtenerIDValidator, validarPedido);

router.get('/', ctrl.listar, obtenerIDValidator, validarPedido);
router.get('/:id', ctrl.obtener, obtenerIDValidator, validarPedido);
router.post('/', ctrl.crear, obtenerIDValidator, validarPedido);
router.patch('/:id/estado', ctrl.actualizarEstado, obtenerIDValidator, validarPedido);
router.delete('/:id', ctrl.eliminar, obtenerIDValidator, validarPedido);

export default router;
