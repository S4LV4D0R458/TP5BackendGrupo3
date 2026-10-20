import { prisma } from '../config/prisma.js';
import { Prisma } from '../generated/prisma/client.js';
import { HttpError } from '../utils/http.js';

interface DatosCliente {
  nombre: string;
  apellido?: string | null;
  empresa?: string | null;
  telefono?: string | null;
  email?: string | null;
  direccion?: string | null;
  ciudad?: string | null;
}

async function listar() {
  try {
    return await prisma.cliente.findMany({
      orderBy: [
        { nombre: 'asc' },
        { apellido: 'asc' }
      ]
    });
  } catch (e) {
    throw new HttpError(500, 'Error al cargar la lista de clientes');
  }
}

async function obtener(id: number) {
  try {
    const cliente = await prisma.cliente.findUnique({
      where: { id }
    });

    if (!cliente) {
      throw new HttpError(404, 'Cliente no encontrado');
    }

    return cliente;
  } catch (e) {
    if (e instanceof HttpError) throw e;

    throw new HttpError(500, 'Error al obtener el cliente');
  }
}

async function crear(datos: DatosCliente) {
  try {
    const cliente = await prisma.cliente.create({
      data: {
        nombre: datos.nombre,
        apellido: datos.apellido ?? null,
        empresa: datos.empresa ?? null,
        telefono: datos.telefono ?? null,
        email: datos.email ?? null,
        direccion: datos.direccion ?? null,
        ciudad: datos.ciudad ?? null
      }
    });

    return cliente.id;
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === 'P2002') {
        throw new HttpError(409, 'Ya existe un cliente registrado con ese email');
      }
      if (error.code === 'P2000') {
        throw new HttpError(400, 'Uno de los campos supera la longitud permitida');
      }
    }

    throw error;
  }
}

async function actualizar(id: number, datos: DatosCliente) {
  try {
    return prisma.cliente.update({
    where: { id },
    data: {
      nombre: datos.nombre,
      apellido: datos.apellido ?? null,
      empresa: datos.empresa ?? null,
      telefono: datos.telefono ?? null,
      email: datos.email ?? null,
      direccion: datos.direccion ?? null,
      ciudad: datos.ciudad ?? null
    }
  });
  } catch (error) {
    throw new HttpError(500, "Error al actualizar el cliente");
  }
}

async function eliminar(id: number) {
  await prisma.cliente.delete({
    where: { id }
  });
}

export { listar, obtener, crear, actualizar, eliminar };