interface DatosCategoria {
    nombre: string;
    descripcion?: string | null;
}
declare function listar(): Promise<{
    id: number;
    nombre: string;
    descripcion: string;
    createdAt: Date;
    updatedAt: Date;
}[]>;
declare function obtener(id: number): Promise<{
    id: number;
    nombre: string;
    descripcion: string;
    createdAt: Date;
    updatedAt: Date;
} | null>;
declare function crear({ nombre, descripcion }: DatosCategoria): Promise<{
    id: number;
    nombre: string;
    descripcion: string;
    createdAt: Date;
    updatedAt: Date;
}>;
declare function actualizar(id: number, { nombre, descripcion }: DatosCategoria): Promise<{
    id: number;
    nombre: string;
    descripcion: string;
    createdAt: Date;
    updatedAt: Date;
}>;
declare function eliminar(id: number): Promise<{
    id: number;
    nombre: string;
    descripcion: string;
    createdAt: Date;
    updatedAt: Date;
}>;
export { listar, obtener, crear, actualizar, eliminar };
//# sourceMappingURL=categorias.repository.d.ts.map