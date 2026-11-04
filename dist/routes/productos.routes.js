import express from 'express';
import * as ctrl from '../controllers/productos.controller.js';
import { createProductoValidator, obtenerIDValidator } from '../validators/productos.validator.js';
const router = express.Router();
// Las rutas fijas van ANTES de /:id, si no Express las confunde con un id
router.get('/stock-bajo', ctrl.stockBajo);
router.get('/resumen/categorias', ctrl.resumenPorCategoria);
router.get('/', ctrl.listar);
router.get('/:id', obtenerIDValidator, ctrl.obtener);
router.post('/', createProductoValidator, ctrl.crear);
router.put('/:id', obtenerIDValidator, createProductoValidator, ctrl.actualizar);
router.delete('/:id', obtenerIDValidator, ctrl.eliminar);
export default router;
//# sourceMappingURL=productos.routes.js.map