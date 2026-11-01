import express from 'express';
import ctrl from '../controllers/categorias.controller.js';
import { createCategoriasValidator, obtenerIDValidator } from '../validators/categorias.validator.js'

const router = express.Router();

//Las rutas validan 
router.get('/', ctrl.listar, createCategoriasValidator, obtenerIDValidator);
router.get('/:id', ctrl.obtener, createCategoriasValidator, obtenerIDValidator);
router.post('/', ctrl.crear, createCategoriasValidator, obtenerIDValidator);
router.put('/:id', ctrl.actualizar, createCategoriasValidator, obtenerIDValidator);
router.delete('/:id', ctrl.eliminar, createCategoriasValidator, obtenerIDValidator);

export default router;
