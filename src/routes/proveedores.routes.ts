import express from 'express';
import * as ctrl from '../controllers/proveedores.controller.js';
import {validarProveedores, obtenerIDValidator } from "../validators/proveedores.validator.js"
const router = express.Router();

router.get('/', ctrl.listar, validarProveedores, obtenerIDValidator);
router.get('/:id', ctrl.obtener, validarProveedores, obtenerIDValidator);
router.get('/:id/productos', ctrl.productosDe, validarProveedores, obtenerIDValidator);
router.post('/', ctrl.crear, validarProveedores, obtenerIDValidator);
router.put('/:id', ctrl.actualizar, validarProveedores, obtenerIDValidator);
router.delete('/:id', ctrl.eliminar, validarProveedores, obtenerIDValidator);

export default router;