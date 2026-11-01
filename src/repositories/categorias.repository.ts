// Importar conexión_DB
import { prisma } from '../config/prisma.js';
// Interfaz para los datos de la categoría
interface DatosCategoria {
  nombre: string;
  descripcion?: string | null;
}

// Crear función listar para filtro de forma ascendente - GET 
async function listar() {
  return prisma.categoria.findMany({
    orderBy: { nombre: 'asc' },
  });
}

// Crear filtro por ID - GET
async function obtener(id: number) {
  return prisma.categoria.findUnique({
    where: { id },
  });
}

// Crear una nueva categoria  - POST
async function crear({ nombre, descripcion }: DatosCategoria) {
  return prisma.categoria.create({
    data: { nombre, descripcion: descripcion ?? '' },
  });
}

// Función actualizar una categoria con su ID - PUT
async function actualizar(id: number, { nombre, descripcion }: DatosCategoria) {
  return prisma.categoria.update({
    where: { id },
    data: { nombre, descripcion: descripcion ?? '' },
  });
}

// Elimina categoría 
async function eliminar(id: number) {
  return prisma.categoria.delete({
    where: { id },
  });
}

// Exportación
export { listar, obtener, crear, actualizar, eliminar };