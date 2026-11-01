import express from 'express';
import * as ctrl from '../controllers/productos.controller.js';
import { createProductoValidator, obtenerIDValidator } from '../validators/productos.validator.js'

const router = express.Router();

// Las rutas fijas van ANTES de /:id, si no Express las confunde con un id
router.get('/stock-bajo', ctrl.stockBajo, createProductoValidator, obtenerIDValidator);
router.get('/resumen/categorias', ctrl.resumenPorCategoria, createProductoValidator, obtenerIDValidator);

router.get('/', ctrl.listar, createProductoValidator, obtenerIDValidator);
router.get('/:id', ctrl.obtener, createProductoValidator, obtenerIDValidator);
router.post('/', ctrl.crear, createProductoValidator, obtenerIDValidator);
router.put('/:id', ctrl.actualizar, createProductoValidator, obtenerIDValidator);
router.delete('/:id', ctrl.eliminar, createProductoValidator, obtenerIDValidator);

export default router;