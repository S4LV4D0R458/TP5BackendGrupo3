import express from 'express';
import * as ctrl from '../controllers/reportes.controller.js';
import { validarReportes } from '../validators/reportes.validator.js';
const router = express.Router();
router.get('/productos-mas-vendidos', validarReportes, ctrl.productosMasVendidos);
export default router;
//# sourceMappingURL=reportes.routes.js.map