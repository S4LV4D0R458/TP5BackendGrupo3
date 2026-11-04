interface DatosCliente {
    nombre: string;
    apellido: string;
    empresa: string;
    telefono: string;
    email: string;
    direccion: string;
    ciudad: string;
}
declare function listar(): Promise<{
    id: number;
    nombre: string;
    apellido: string | null;
    empresa: string | null;
    telefono: string | null;
    email: string | null;
    direccion: string | null;
    ciudad: string | null;
    createdAt: Date;
    updatedAt: Date;
}[]>;
declare function obtener(id: number): Promise<{
    id: number;
    nombre: string;
    apellido: string | null;
    empresa: string | null;
    telefono: string | null;
    email: string | null;
    direccion: string | null;
    ciudad: string | null;
    createdAt: Date;
    updatedAt: Date;
}>;
declare function crear(datos: DatosCliente): Promise<number>;
declare function actualizar(id: number, datos: DatosCliente): Promise<{
    id: number;
    nombre: string;
    apellido: string | null;
    empresa: string | null;
    telefono: string | null;
    email: string | null;
    direccion: string | null;
    ciudad: string | null;
    createdAt: Date;
    updatedAt: Date;
}>;
declare function eliminar(id: number): Promise<void>;
export { listar, obtener, crear, actualizar, eliminar };
//# sourceMappingURL=clientes.repository.d.ts.map