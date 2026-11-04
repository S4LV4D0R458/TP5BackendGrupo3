import { prisma } from '../config/prisma.js';
const seleccionarProveedor = {
    id: true,
    nombre: true,
    contacto: true,
    telefono: true,
    email: true,
    direccion: true,
    ciudad: true,
    activo: true,
};
// Lista proveedores con cantidad de productos y valor de su stock.
async function listar({ ciudad, q } = {}) {
    const proveedores = await prisma.proveedor.findMany({
        where: {
            ...(typeof ciudad === 'string' && ciudad.trim() !== ''
                ? { ciudad }
                : {}),
            ...(typeof q === 'string' && q.trim() !== ''
                ? { nombre: { contains: q.trim() } }
                : {})
        },
        select: {
            ...seleccionarProveedor,
            productos: {
                select: {
                    precio: true,
                    stock: true
                }
            }
        },
        orderBy: { nombre: 'asc' }
    });
    return proveedores.map(({ productos, ...proveedor }) => ({
        ...proveedor,
        cantidad_productos: productos.length,
        valor_stock: productos.reduce((suma, producto) => suma + producto.stock * Number(producto.precio), 0)
    }));
}
// Obtiene un proveedor por ID, con sus estadísticas.
async function obtener(id) {
    const proveedor = await prisma.proveedor.findUnique({
        where: { id }, select: {
            ...seleccionarProveedor,
            productos: { select: {
                    precio: true,
                    stock: true
                } }
        }
    });
    if (!proveedor)
        return null;
    const { productos, ...datos } = proveedor;
    return { ...datos, cantidad_productos: productos.length, valor_stock: productos.reduce((suma, producto) => suma + producto.stock * Number(producto.precio), 0) };
}
// Lista los productos asociados a un proveedor.
async function productosDe(id) {
    return prisma.producto.findMany({
        where: { proveedorId: id },
        select: {
            id: true,
            nombre: true,
            precio: true,
            stock: true,
            categoria: {
                select: { nombre: true }
            }
        },
        orderBy: { nombre: 'asc' }
    }).then((productos) => productos.map(({ categoria, ...producto }) => ({
        ...producto,
        precio: Number(producto.precio),
        categoria: categoria?.nombre ?? null
    })));
}
// Crea un proveedor y devuelve su ID.
async function crear(datos) {
    const proveedor = await prisma.proveedor.create({
        data: {
            nombre: datos.nombre,
            contacto: datos.contacto,
            telefono: datos.telefono,
            email: datos.email,
            direccion: datos.direccion,
            ciudad: datos.ciudad,
            ...(datos.activo !== undefined && { activo: datos.activo })
        },
        select: { id: true }
    });
    return proveedor.id;
}
// Actualización completa.
async function actualizar(id, datos) {
    await prisma.proveedor.update({
        where: { id },
        data: {
            nombre: datos.nombre,
            contacto: datos.contacto ?? null,
            telefono: datos.telefono ?? null,
            email: datos.email ?? null,
            direccion: datos.direccion ?? null,
            ciudad: datos.ciudad ?? null,
            activo: datos.activo ?? true
        }
    });
    return obtener(id);
}
// Elimina un proveedor.
async function eliminar(id) {
    await prisma.proveedor.delete({
        where: { id }
    });
}
export { listar, obtener, productosDe, crear, actualizar, eliminar };
//# sourceMappingURL=proveedores.repository.js.map