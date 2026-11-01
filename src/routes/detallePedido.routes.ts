import express from 'express';
import * as ctrl from '../controllers/detallePedido.controller.js';
import {
  validarCrearDetallePedido,
  validarActualizarDetallePedido,
  obtenerProductoIDValidator,
} from '../validators/detallePedido.validator.js';

const router = express.Router({ mergeParams: true });

router.get('/', ctrl.listar);
router.post('/', validarCrearDetallePedido, ctrl.crear);
router.get('/:productoId', obtenerProductoIDValidator, ctrl.obtener);
router.put('/:productoId', obtenerProductoIDValidator, validarActualizarDetallePedido, ctrl.actualizar);
router.delete('/:productoId', obtenerProductoIDValidator, ctrl.eliminar);

export default router;
