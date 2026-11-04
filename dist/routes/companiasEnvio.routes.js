import express from 'express';
import * as ctrl from '../controllers/companiasEnvio.controller.js';
import { validarCompaniaEnvio, obtenerIDValidator } from '../validators/companiasEnvio.validator.js';
const router = express.Router();
router.get('/', ctrl.listar);
router.get('/:id', obtenerIDValidator, ctrl.obtener);
router.post('/', validarCompaniaEnvio, ctrl.crear);
router.put('/:id', obtenerIDValidator, validarCompaniaEnvio, ctrl.actualizar);
router.delete('/:id', obtenerIDValidator, ctrl.eliminar);
export default router;
//# sourceMappingURL=companiasEnvio.routes.js.map