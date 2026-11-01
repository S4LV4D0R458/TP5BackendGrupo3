import express from 'express';
import * as ctrl from '../controllers/detallePedido.controller.js';
import {validarDetallePedido, obtenerIDValidator} from "../validators/detallePedido.validator.js"

const router = express.Router({ mergeParams: true });

router.get('/', ctrl.listar, validarDetallePedido, obtenerIDValidator);
router.post('/', ctrl.crear, validarDetallePedido, obtenerIDValidator);
router.get('/:productoId', ctrl.obtener, validarDetallePedido, obtenerIDValidator);
router.put('/:productoId', ctrl.actualizar, validarDetallePedido, obtenerIDValidator);
router.delete('/:productoId', ctrl.eliminar, validarDetallePedido, obtenerIDValidator);

export default router;
