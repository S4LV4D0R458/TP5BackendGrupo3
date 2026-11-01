import express from 'express';
import * as ctrl from '../controllers/clientes.controller.js';
import {validarCliente, obtenerIDValidator} from "../validators/clientes.validator.js"
const router = express.Router();

router.get('/', ctrl.listar);
router.get('/:id', obtenerIDValidator, ctrl.obtener);
router.post('/', validarCliente, ctrl.crear);
router.put('/:id', obtenerIDValidator, validarCliente, ctrl.actualizar);
router.delete('/:id', obtenerIDValidator, ctrl.eliminar);

export default router;
