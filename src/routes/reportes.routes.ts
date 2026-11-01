import express from 'express';
import * as ctrl from '../controllers/reportes.controller.js';
import {obtenerIDValidator, validarReportes} from "../validators/reportes.validator.js"

const router = express.Router();

router.get('/productos-mas-vendidos', ctrl.productosMasVendidos, obtenerIDValidator, validarReportes);

export default router;
