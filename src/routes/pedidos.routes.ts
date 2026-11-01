import express from 'express';
import * as ctrl from '../controllers/pedidos.controller.js';
import detallePedidoRoutes from './detallePedido.routes.js';
import {
  obtenerIDValidator,
  obtenerPedidoIDValidator,
  validarCrearPedido,
  validarActualizarEstadoPedido,
} from '../validators/pedidos.validator.js';
const router = express.Router();

router.get('/reportes/clientes', ctrl.reportePorCliente);
router.get('/reportes/empleados', ctrl.reportePorEmpleado);
router.use('/:pedidoId/detalle', obtenerPedidoIDValidator, detallePedidoRoutes);

router.get('/', ctrl.listar);
router.get('/:id', obtenerIDValidator, ctrl.obtener);
router.post('/', validarCrearPedido, ctrl.crear);
router.patch('/:id/estado', obtenerIDValidator, validarActualizarEstadoPedido, ctrl.actualizarEstado);
router.delete('/:id', obtenerIDValidator, ctrl.eliminar);

export default router;
