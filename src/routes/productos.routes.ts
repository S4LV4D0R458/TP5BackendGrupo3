import express from 'express';
import * as ctrl from '../controllers/productos.controller.js';

const router = express.Router();

// Las rutas fijas van ANTES de /:id, si no Express las confunde con un id
router.get('/stock-bajo', ctrl.stockBajo);
router.get('/resumen/categorias', ctrl.resumenPorCategoria);

router.get('/', ctrl.listar);
router.get('/:id', ctrl.obtener);
router.post('/', ctrl.crear);
router.put('/:id', ctrl.actualizar);
router.delete('/:id', ctrl.eliminar);

export default router;
