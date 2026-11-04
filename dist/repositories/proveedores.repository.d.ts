interface FiltrosProveedor {
    ciudad?: unknown;
    q?: unknown;
}
interface DatosProveedor {
    nombre: string;
    contacto: string;
    telefono: string;
    email: string;
    direccion: string;
    ciudad: string;
    activo: boolean;
}
declare function listar({ ciudad, q }?: FiltrosProveedor): Promise<{
    cantidad_productos: number;
    valor_stock: number;
    activo: boolean;
    ciudad: string;
    contacto: string;
    direccion: string;
    email: string;
    id: number;
    nombre: string;
    telefono: string;
}[]>;
declare function obtener(id: number): Promise<{
    cantidad_productos: number;
    valor_stock: number;
    activo: boolean;
    ciudad: string;
    contacto: string;
    direccion: string;
    email: string;
    id: number;
    nombre: string;
    telefono: string;
} | null>;
declare function productosDe(id: number): Promise<{
    precio: number;
    categoria: string | null;
    id: number;
    nombre: string;
    stock: number;
}[]>;
declare function crear(datos: DatosProveedor): Promise<number>;
declare function actualizar(id: number, datos: DatosProveedor): Promise<{
    cantidad_productos: number;
    valor_stock: number;
    activo: boolean;
    ciudad: string;
    contacto: string;
    direccion: string;
    email: string;
    id: number;
    nombre: string;
    telefono: string;
} | null>;
declare function eliminar(id: number): Promise<void>;
export { listar, obtener, productosDe, crear, actualizar, eliminar };
//# sourceMappingURL=proveedores.repository.d.ts.map