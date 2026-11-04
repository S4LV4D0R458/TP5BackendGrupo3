interface DatosCompaniaEnvio {
    nombre: string;
    telefono: string;
    email: string;
}
declare function listar(): Promise<{
    email: string;
    id: number;
    nombre: string;
    telefono: string;
}[]>;
declare function obtener(id: number): Promise<{
    email: string;
    id: number;
    nombre: string;
    telefono: string;
}>;
declare function crear(datos: DatosCompaniaEnvio): Promise<number>;
declare function actualizar(id: number, datos: DatosCompaniaEnvio): Promise<{
    id: number;
    nombre: string;
    telefono: string;
    email: string;
    createdAt: Date;
    updatedAt: Date;
}>;
declare function eliminar(id: number): Promise<void>;
export { listar, obtener, crear, actualizar, eliminar };
//# sourceMappingURL=companiasEnvio.repository.d.ts.map