import { prisma } from '../config/prisma.js';
import { Prisma } from '../generated/prisma/client.js';
import { HttpError } from '../utils/http.js';

interface DatosCliente {
  nombre: string;
  apellido: string;
  empresa: string;
  telefono: string;
  email: string;
  direccion: string;
  ciudad: string;
}

// Lista clientes por nombre y apellido; encapsula fallos de lectura con mensajes de API.
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


// Busca el cliente y diferencia un 404 real de errores inesperados de base de datos.
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

// Crea un cliente, normalizando propiedades omitidas a null y traduciendo conflictos conocidos.
async function crear(datos: DatosCliente) {
  try {
    const cliente = await prisma.cliente.create({
      data: {
        nombre: datos.nombre,
        apellido: datos.apellido,
        empresa: datos.empresa,
        telefono: datos.telefono,
        email: datos.email,
        direccion: datos.direccion,
        ciudad: datos.ciudad
      }
    });
    
    return cliente.id;
    // Si se produce un error de base de datos, lo traducimos a un mensaje controlado.
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


// Actualiza los campos del cliente; los valores omitidos se convierten en null.
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


// Borra el registro indicado; la base rechaza el borrado si existen referencias obligatorias.
async function eliminar(id: number) {
  await prisma.cliente.delete({
    where: { id }
  });
}

export { listar, obtener, crear, actualizar, eliminar };