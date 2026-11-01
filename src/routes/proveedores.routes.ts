import express from 'express';
import * as ctrl from '../controllers/proveedores.controller.js';
import {validarProveedores, obtenerIDValidator } from "../validators/proveedores.validator.js"
const router = express.Router();

router.get('/', ctrl.listar);
router.get('/:id', obtenerIDValidator, ctrl.obtener);
router.get('/:id/productos', obtenerIDValidator, ctrl.productosDe);
router.post('/', validarProveedores, ctrl.crear);
router.put('/:id', obtenerIDValidator, validarProveedores, ctrl.actualizar);
router.delete('/:id', obtenerIDValidator, ctrl.eliminar);

export default router;