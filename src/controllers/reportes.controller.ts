import { productosMasVendidos as obtenerProductosMasVendidos } from '../repositories/reportes.repository.js';
import { asyncHandler, HttpError, numOpcional } from '../utils/http.js';

const productosMasVendidos = asyncHandler(async (req, res) => {
  const limite = numOpcional(req.query.limite, 'limite') ?? 10;
  if (!Number.isInteger(limite) || limite < 1 || limite > 100) {
    throw new HttpError(400, 'El filtro limite debe ser un entero entre 1 y 100');
  }

  res.json(await obtenerProductosMasVendidos(limite));
});

export { productosMasVendidos };
