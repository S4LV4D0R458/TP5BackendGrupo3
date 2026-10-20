import { prisma } from '../config/prisma.js';

interface DatosCategoria {
  nombre: string;
  descripcion?: string | null;
}

async function listar() {
  return prisma.categoria.findMany({
    orderBy: { nombre: 'asc' },
  });
}

async function obtener(id: number) {
  return prisma.categoria.findUnique({
    where: { id },
  });
}

async function crear({ nombre, descripcion }: DatosCategoria) {
  return prisma.categoria.create({
    data: { nombre, descripcion: descripcion ?? '' },
  });
}

async function actualizar(id: number, { nombre, descripcion }: DatosCategoria) {
  return prisma.categoria.update({
    where: { id },
    data: { nombre, descripcion: descripcion ?? '' },
  });
}

async function eliminar(id: number) {
  return prisma.categoria.delete({
    where: { id },
  });
}

export { listar, obtener, crear, actualizar, eliminar };
