import { Prisma } from '../generated/prisma/client.js';
import { prisma } from '../config/prisma.js';
import { HttpError } from '../utils/http.js';

interface FiltrosProducto {
  categoria_id?: number;
  proveedor_id?: number;
  precio_min?: number;
  precio_max?: number;
  q?: unknown;
}

export interface DatosProducto {
  nombre: string;
  descripcion?: string | null;
  precio: number;
  stock?: number;
  proveedor_id: number;
  categoria_id: number | null;
  activo?: boolean;
}

const incluirRelaciones = {
  proveedor: {
    select: { id: true, nombre: true },
  },
  categoria: {
    select: { id: true, nombre: true },
  },
} satisfies Prisma.ProductoInclude;

type ProductoConRelaciones = Prisma.ProductoGetPayload<{
  include: typeof incluirRelaciones;
}>;

async function conManejoDeErrores<T>(operacion: () => Promise<T>): Promise<T> {
  try {
    return await operacion();
  } catch (error) {
    if (error instanceof HttpError) throw error;

    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === 'P2025') {
        throw new HttpError(404, 'No se encontró el producto o un registro relacionado');
      }
      if (error.code === 'P2002') {
        throw new HttpError(409, 'Ya existe un producto con esos datos');
      }
      if (error.code === 'P2003') {
        throw new HttpError(400, 'Referencia inválida: el proveedor o la categoría no existe');
      }
    }

    throw error;
  }
}

function presentarProducto(producto: ProductoConRelaciones) {
  return {
    id: producto.id,
    nombre: producto.nombre,
    descripcion: producto.descripcion,
    precio: Number(producto.precio),
    stock: producto.stock,
    activo: producto.activo,
    proveedor_id: producto.proveedor.id,
    proveedor: producto.proveedor.nombre,
    categoria_id: producto.categoria?.id ?? null,
    categoria: producto.categoria?.nombre ?? null,
  };
}

const seleccionarProducto = {
  id: true,
  nombre: true,
  descripcion: true,
  precio: true,
  stock: true,
  activo: true,
  proveedorId: true,
  categoriaId: true,
} satisfies Prisma.ProductoSelect;

async function listar({
  categoria_id,
  proveedor_id,
  precio_min,
  precio_max,
  q,
}: FiltrosProducto = {}) {
  return conManejoDeErrores(async () => {
    const productos = await prisma.producto.findMany({
      where: {
        ...(categoria_id !== undefined && { categoriaId: categoria_id }),
        ...(proveedor_id !== undefined && { proveedorId: proveedor_id }),
        ...((precio_min !== undefined || precio_max !== undefined) && {
          precio: {
            ...(precio_min !== undefined && { gte: precio_min }),
            ...(precio_max !== undefined && { lte: precio_max }),
          },
        }),
        ...(typeof q === 'string' && q.trim() !== '' && {
          nombre: { contains: q.trim() },
        }),
      },
      include: incluirRelaciones,
      orderBy: { nombre: 'asc' },
    });

    return productos.map(presentarProducto);
  });
}

async function obtener(id: number) {
  return conManejoDeErrores(async () => {
    const producto = await prisma.producto.findUnique({
      where: { id },
      include: incluirRelaciones,
    });

    return producto ? presentarProducto(producto) : undefined;
  });
}

async function stockBajo(limite: number) {
  return conManejoDeErrores(async () => {
    const productos = await prisma.producto.findMany({
      where: { stock: { lte: limite } },
      include: incluirRelaciones,
      orderBy: { stock: 'asc' },
    });

    return productos.map(presentarProducto);
  });
}

async function resumenPorCategoria() {
  return conManejoDeErrores(async () => {
    const categorias = await prisma.categoria.findMany({
      select: {
        id: true,
        nombre: true,
        productos: {
          select: {
            precio: true,
            stock: true,
          },
        },
      },
    });

    return categorias
      .map((categoria) => ({
        categoria_id: categoria.id,
        categoria: categoria.nombre,
        cantidad_productos: categoria.productos.length,
        precio_promedio:
          categoria.productos.length === 0
            ? 0
            : categoria.productos.reduce(
                (suma, producto) => suma + Number(producto.precio),
                0,
              ) / categoria.productos.length,
        valor_stock: categoria.productos.reduce(
          (suma, producto) => suma + producto.stock * Number(producto.precio),
          0,
        ),
      }))
      .sort((a, b) => b.valor_stock - a.valor_stock);
  });
}

async function crear(datos: DatosProducto) {
  return conManejoDeErrores(async () => {
    const producto = await prisma.producto.create({
      data: {
        nombre: datos.nombre,
        descripcion: datos.descripcion ?? '',
        precio: datos.precio,
        stock: datos.stock ?? 0,
        proveedorId: datos.proveedor_id,
        categoriaId: datos.categoria_id,
      },
      select: { id: true },
    });

    return producto.id;
  });
}

async function actualizar(id: number, datos: DatosProducto) {
  return conManejoDeErrores(async () => {
    const producto: Prisma.ProductoUpdateInput = {
      nombre: datos.nombre,
      descripcion: datos.descripcion ?? '',
      precio: datos.precio,
      stock: datos.stock ?? 0,
      ...(datos.proveedor_id !== undefined && {
        proveedor: { connect: { id: datos.proveedor_id } },
      }),
      ...(datos.categoria_id === null
        ? { categoria: { disconnect: true } }
        : datos.categoria_id !== undefined
          ? { categoria: { connect: { id: datos.categoria_id } } }
          : {}),
      activo: datos.activo ?? true,
    };

    await prisma.producto.update({
      where: { id },
      data: producto,
      select: seleccionarProducto,
    });
  });
}

async function eliminar(id: number) {
  try {
    await prisma.producto.delete({
      where: { id },
    });
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === 'P2003') {
        throw new HttpError(
          409,
          'No se puede eliminar el producto porque está asociado a uno o más pedidos',
        );
      }
      if (error.code === 'P2025') {
        throw new HttpError(404, 'Producto no encontrado');
      }
    }

    throw error;
  }
}

export { listar, obtener, stockBajo, resumenPorCategoria, crear, actualizar, eliminar };
