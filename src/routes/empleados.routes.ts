import express from 'express';
import * as ctrl from '../controllers/empleados.controller.js';
import {validarEmpleado, obtenerIDValidator} from '../validators/empleados.validator.js';

const router = express.Router();

router.get('/', ctrl.listar, validarEmpleado, obtenerIDValidator);
router.get('/:id', ctrl.obtener, validarEmpleado, obtenerIDValidator);
router.post('/', ctrl.crear, validarEmpleado, obtenerIDValidator);
router.put('/:id', ctrl.actualizar, validarEmpleado, obtenerIDValidator);
router.patch('/:id', ctrl.actualizarParcial, validarEmpleado, obtenerIDValidator);
router.delete('/:id', ctrl.eliminar, validarEmpleado, obtenerIDValidator);

export default router;
