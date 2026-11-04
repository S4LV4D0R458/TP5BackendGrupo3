import express from 'express';
import * as ctrl from '../controllers/empleados.controller.js';
import { validarEmpleado, validarEmpleadoParcial, obtenerIDValidator, } from '../validators/empleados.validator.js';
const router = express.Router();
router.get('/', ctrl.listar);
router.get('/:id', obtenerIDValidator, ctrl.obtener);
router.post('/', validarEmpleado, ctrl.crear);
router.put('/:id', obtenerIDValidator, validarEmpleado, ctrl.actualizar);
router.patch('/:id', obtenerIDValidator, validarEmpleadoParcial, ctrl.actualizarParcial);
router.delete('/:id', obtenerIDValidator, ctrl.eliminar);
export default router;
//# sourceMappingURL=empleados.routes.js.map