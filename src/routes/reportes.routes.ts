import express from 'express';
import * as ctrl from '../controllers/reportes.controller.js';

const router = express.Router();

router.get('/productos-mas-vendidos', ctrl.productosMasVendidos);

export default router;
