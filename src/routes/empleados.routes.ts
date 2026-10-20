import express from 'express';
import * as ctrl from '../controllers/empleados.controller.js';

const router = express.Router();

router.get('/', ctrl.listar);
router.get('/:id', ctrl.obtener);
router.post('/', ctrl.crear);
router.put('/:id', ctrl.actualizar);
router.patch('/:id', ctrl.actualizarParcial);
router.delete('/:id', ctrl.eliminar);

export default router;
