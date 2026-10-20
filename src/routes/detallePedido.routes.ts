import express from 'express';
import * as ctrl from '../controllers/detallePedido.controller.js';

const router = express.Router({ mergeParams: true });

router.get('/', ctrl.listar);
router.post('/', ctrl.crear);
router.get('/:productoId', ctrl.obtener);
router.put('/:productoId', ctrl.actualizar);
router.delete('/:productoId', ctrl.eliminar);

export default router;
