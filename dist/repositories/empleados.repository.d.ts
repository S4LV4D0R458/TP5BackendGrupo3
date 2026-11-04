interface DatosEmpleado {
    nombre: string;
    apellido: string;
    cargo: string;
    email: string;
    telefono: string;
    fecha_ingreso?: Date | string | null;
}
export interface DatosEmpleadoParcial {
    nombre?: string;
    apellido?: string;
    cargo?: string | null;
    email?: string | null;
    telefono?: string | null;
    fecha_ingreso?: Date | string | null;
}
declare function listar(): Promise<{
    id: number;
    nombre: string;
    apellido: string | null;
    cargo: string | null;
    email: string | null;
    telefono: string | null;
    fecha_ingreso: string | null;
}[]>;
declare function obtener(id: number): Promise<{
    id: number;
    nombre: string;
    apellido: string | null;
    cargo: string | null;
    email: string | null;
    telefono: string | null;
    fecha_ingreso: string | null;
} | undefined>;
declare function crear(datos: DatosEmpleado): Promise<number>;
declare function actualizar(id: number, datos: DatosEmpleado): Promise<{
    id: number;
    nombre: string;
    apellido: string | null;
    cargo: string | null;
    email: string | null;
    telefono: string | null;
    fecha_ingreso: string | null;
}>;
declare function actualizarParcial(id: number, datos: DatosEmpleadoParcial): Promise<{
    id: number;
    nombre: string;
    apellido: string | null;
    cargo: string | null;
    email: string | null;
    telefono: string | null;
    fecha_ingreso: string | null;
}>;
declare function tieneVentas(id: number): Promise<boolean>;
declare function eliminar(id: number): Promise<void>;
export { listar, obtener, crear, actualizar, actualizarParcial, tieneVentas, eliminar };
//# sourceMappingURL=empleados.repository.d.ts.map