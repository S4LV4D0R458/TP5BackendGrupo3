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
declare function listar({ categoria_id, proveedor_id, precio_min, precio_max, q, }?: FiltrosProducto): Promise<{
    id: number;
    nombre: string;
    descripcion: string;
    precio: number;
    stock: number;
    activo: boolean;
    proveedor_id: number;
    proveedor: string;
    categoria_id: number | null;
    categoria: string | null;
}[]>;
declare function obtener(id: number): Promise<{
    id: number;
    nombre: string;
    descripcion: string;
    precio: number;
    stock: number;
    activo: boolean;
    proveedor_id: number;
    proveedor: string;
    categoria_id: number | null;
    categoria: string | null;
} | undefined>;
declare function stockBajo(limite: number): Promise<{
    id: number;
    nombre: string;
    descripcion: string;
    precio: number;
    stock: number;
    activo: boolean;
    proveedor_id: number;
    proveedor: string;
    categoria_id: number | null;
    categoria: string | null;
}[]>;
declare function resumenPorCategoria(): Promise<{
    categoria_id: number;
    categoria: string;
    cantidad_productos: number;
    precio_promedio: number;
    valor_stock: number;
}[]>;
declare function crear(datos: DatosProducto): Promise<number>;
declare function actualizar(id: number, datos: DatosProducto): Promise<void>;
declare function eliminar(id: number): Promise<void>;
export { listar, obtener, stockBajo, resumenPorCategoria, crear, actualizar, eliminar };
//# sourceMappingURL=productos.repository.d.ts.map