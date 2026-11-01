import express from 'express';
import * as ctrl from '../controllers/companiasEnvio.controller.js';
import { validarCompaniaEnvio, obtenerIDValidator } from '../validators/companiasEnvio.validator.js'

const router = express.Router();

router.get('/', ctrl.listar, validarCompaniaEnvio, obtenerIDValidator);
router.get('/:id', ctrl.obtener, validarCompaniaEnvio, obtenerIDValidator);
router.post('/', ctrl.crear,validarCompaniaEnvio, obtenerIDValidator);
router.put('/:id', ctrl.actualizar,validarCompaniaEnvio, obtenerIDValidator);
router.delete('/:id', ctrl.eliminar,validarCompaniaEnvio, obtenerIDValidator);

export default router;
