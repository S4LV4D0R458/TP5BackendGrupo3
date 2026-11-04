import express from "express";
import cors from 'cors';
import morgan from 'morgan';
import { errorHandler, noEncontrada } from './middlewares/errorHandler.js';
import pedidosRoutes from './routes/pedidos.routes.js';
import productosRoutes from './routes/productos.routes.js';
import proveedoresRoutes from './routes/proveedores.routes.js';
import categoriasRoutes from './routes/categorias.routes.js';
import clientesRoutes from './routes/clientes.routes.js';
import empleadosRoutes from './routes/empleados.routes.js';
import companiasEnvioRoutes from './routes/companiasEnvio.routes.js';
import reportesRoutes from './routes/reportes.routes.js';
const app = express();
const PORT = process.env.PORT || 3000;
// Middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());
app.use('/api/proveedores', proveedoresRoutes);
app.use('/api/productos', productosRoutes);
app.use('/api/pedidos', pedidosRoutes);
app.use('/api/categorias', categoriasRoutes);
app.use('/api/clientes', clientesRoutes);
app.use('/api/empleados', empleadosRoutes);
app.use('/api/companias-envio', companiasEnvioRoutes);
app.use('/api/reportes', reportesRoutes);
app.use(noEncontrada);
app.use(errorHandler); // siempre al final
// Routes
app.get('/', (req, res) => {
    res.send('Distribuidora principal');
});
app.listen(PORT, () => {
    console.log(`Server escuchando en el puerto ${PORT}!!`);
});
//# sourceMappingURL=index.js.map