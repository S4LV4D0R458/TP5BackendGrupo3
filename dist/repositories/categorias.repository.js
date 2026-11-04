// Importar conexión_DB
import { prisma } from '../config/prisma.js';
// Crear función listar para filtro de forma ascendente - GET 
async function listar() {
    return prisma.categoria.findMany({
        orderBy: { nombre: 'asc' },
    });
}
// Crear filtro por ID - GET
async function obtener(id) {
    return prisma.categoria.findUnique({
        where: { id },
    });
}
// Crear una nueva categoria  - POST
async function crear({ nombre, descripcion }) {
    return prisma.categoria.create({
        data: { nombre, descripcion: descripcion ?? '' },
    });
}
// Función actualizar una categoria con su ID - PUT
async function actualizar(id, { nombre, descripcion }) {
    return prisma.categoria.update({
        where: { id },
        data: { nombre, descripcion: descripcion ?? '' },
    });
}
// Elimina categoría 
async function eliminar(id) {
    return prisma.categoria.delete({
        where: { id },
    });
}
// Exportación
export { listar, obtener, crear, actualizar, eliminar };
//# sourceMappingURL=categorias.repository.js.map