import express from 'express';
import * as ctrl from '../controllers/pedidos.controller.js';
import detallePedidoRoutes from './detallePedido.routes.js';

const router = express.Router();

router.get('/reportes/clientes', ctrl.reportePorCliente);
router.get('/reportes/empleados', ctrl.reportePorEmpleado);
router.use('/:pedidoId/detalle', detallePedidoRoutes);

router.get('/', ctrl.listar);
router.get('/:id', ctrl.obtener);
router.post('/', ctrl.crear);
router.patch('/:id/estado', ctrl.actualizarEstado);
router.delete('/:id', ctrl.eliminar);

export default router;
