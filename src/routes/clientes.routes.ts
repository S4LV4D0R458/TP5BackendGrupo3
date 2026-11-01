import express from 'express';
import * as ctrl from '../controllers/clientes.controller.js';
import {validarCliente, obtenerIDValidator} from "../validators/clientes.validator.js"
const router = express.Router();

router.get('/', ctrl.listar, validarCliente, obtenerIDValidator);
router.get('/:id', ctrl.obtener, validarCliente, obtenerIDValidator);
router.post('/', ctrl.crear, validarCliente, obtenerIDValidator);
router.put('/:id', ctrl.actualizar, validarCliente, obtenerIDValidator);
router.delete('/:id', ctrl.eliminar, validarCliente, obtenerIDValidator);

export default router;
