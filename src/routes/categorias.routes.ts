import express from 'express';
import ctrl from '../controllers/categorias.controller.js';

const router = express.Router();

router.get('/', ctrl.listar);
router.get('/:id', ctrl.obtener);
router.post('/', ctrl.crear);
router.put('/:id', ctrl.actualizar);
router.delete('/:id', ctrl.eliminar);

export default router;
