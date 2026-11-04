import express from 'express';
import ctrl from '../controllers/categorias.controller.js';
import { createCategoriasValidator, obtenerIDValidator } from '../validators/categorias.validator.js';
const router = express.Router();
// ctrl se ejecuta después de que se ejecuten los middlewares de validación.
router.get('/', ctrl.listar);
router.get('/:id', obtenerIDValidator, ctrl.obtener);
router.post('/', createCategoriasValidator, ctrl.crear);
router.put('/:id', createCategoriasValidator, obtenerIDValidator, ctrl.actualizar);
router.delete('/:id', obtenerIDValidator, ctrl.eliminar);
export default router;
//# sourceMappingURL=categorias.routes.js.map