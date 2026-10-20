import { prisma } from '../config/prisma.js';
import { Prisma } from '../generated/prisma/client.js';
import { HttpError } from '../utils/http.js';

interface DatosCompaniaEnvio {
  nombre: string;
  telefono: string;
  email: string;
}

function manejarErrorPrisma(e: unknown): never {
  if (e instanceof Prisma.PrismaClientKnownRequestError) {
    if (e.code === 'P2025') {
      throw new HttpError(404, 'Compañía de envío no encontrada');
    }

    if (e.code === 'P2002') {
      throw new HttpError(409, 'El email ya está registrado');
    }

    if (e.code === 'P2003' || e.code === 'P2014') {
      throw new HttpError(
        409,
        'No se puede eliminar la compañía porque está asociada a uno o más pedidos',
      );
    }
  }

  throw new HttpError(500, 'Error al procesar la compañía de envío');
}

async function listar() {
  try {
    return await prisma.companiaEnvio.findMany({
      select: {
        id: true,
        nombre: true,
        telefono: true,
        email: true
      },
      orderBy: {
        nombre: 'asc'
      }
    });
  } catch (e) {
    throw new HttpError(500, 'Error al cargar las compañías de envío');
  }
}

async function obtener(id: number) {
  try {
    const compania = await prisma.companiaEnvio.findUnique({
      where: { id },
      select: {
        id: true,
        nombre: true,
        telefono: true,
        email: true
      }
    });

    if (!compania) {
      throw new HttpError(404, 'Compañía de envío no encontrada');
    }

    return compania;
  } catch (e) {
    if (e instanceof HttpError) throw e;
    manejarErrorPrisma(e);
  }
}

async function crear(datos: DatosCompaniaEnvio) {
  try {
    const compania = await prisma.companiaEnvio.create({
      data: {
        nombre: datos.nombre,
        telefono: datos.telefono,
        email: datos.email
      },
      select: {
        id: true
      }
    });

    return compania.id;
  } catch (e) {
    manejarErrorPrisma(e);
  }
}

async function actualizar(id: number, datos: DatosCompaniaEnvio) {
  try {
    return await prisma.companiaEnvio.update({
      where: { id },
      data: {
        nombre: datos.nombre,
        telefono: datos.telefono,
        email: datos.email
      }
    });
  } catch (e) {
    manejarErrorPrisma(e);
  }
}

async function eliminar(id: number) {
  try {
    await prisma.companiaEnvio.delete({
      where: { id }
    });
  } catch (e) {
    manejarErrorPrisma(e);
  }
}

export { listar, obtener, crear, actualizar, eliminar };