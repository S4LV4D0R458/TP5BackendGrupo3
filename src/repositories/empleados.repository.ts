import { prisma } from '../config/prisma.js';

// Interfaz para crear los datos de un empleado
interface DatosEmpleado {
  nombre: string;
  apellido: string;
  cargo: string;
  email: string;
  telefono: string;
  fecha_ingreso?: Date | string | null;
}

// Interfaz para actualizar parcialmente los datos de un empleado
export interface DatosEmpleadoParcial {
  nombre?: string;
  apellido?: string;
  cargo?: string | null;
  email?: string | null;
  telefono?: string | null;
  fecha_ingreso?: Date | string | null;
}

// Selección de campos de empleado para las consultas
const seleccionEmpleado = {
  id: true,
  nombre: true,
  apellido: true,
  cargo: true,
  email: true,
  telefono: true,
  fechaIngreso: true
} as const;

// Convierte los datos de un empleado a un formato adecuado para la API
function presentarEmpleado(empleado: {
  id: number;
  nombre: string;
  apellido: string | null;
  cargo: string | null;
  email: string | null;
  telefono: string | null;
  fechaIngreso: Date | null;
}) {
  return {
    id: empleado.id,
    nombre: empleado.nombre,
    apellido: empleado.apellido,
    cargo: empleado.cargo,
    email: empleado.email,
    telefono: empleado.telefono,
    fecha_ingreso: empleado.fechaIngreso?.toISOString().slice(0, 10) ?? null
  };
}

// Lista empleados por apellido y nombre.
async function listar() {
  const empleados = await prisma.empleado.findMany({
    select: seleccionEmpleado,
    orderBy: [{ apellido: 'asc' }, { nombre: 'asc' }],
  });
  return empleados.map(presentarEmpleado);
}

// Busca un empleado por ID; devuelve undefined si no existe.
async function obtener(id: number) {
  const empleado = await prisma.empleado.findUnique({
    where: { id },
    select: seleccionEmpleado,
  });
  return empleado ? presentarEmpleado(empleado) : undefined;
}

// Inserta un empleado y convierte la fecha de ingreso al tipo Date de Prisma.
async function crear(datos: DatosEmpleado) {
  const empleado = await prisma.empleado.create({
    data: {
      nombre: datos.nombre,
      apellido: datos.apellido,
      cargo: datos.cargo,
      email: datos.email,
      telefono: datos.telefono,
      fechaIngreso: datos.fecha_ingreso ? new Date(datos.fecha_ingreso) : null,
    },
    select: { id: true },
  });
  return empleado.id;
}
// Reemplaza los datos del empleado y devuelve la representación pública.
async function actualizar(id: number, datos: DatosEmpleado) {
  const empleado = await prisma.empleado.update({
    where: { id },
    data: {
      nombre: datos.nombre,
      apellido: datos.apellido,
      cargo: datos.cargo,
      email: datos.email ?? null,
      telefono: datos.telefono ?? null,
      fechaIngreso: datos.fecha_ingreso ? new Date(datos.fecha_ingreso) : null,
    },
    select: seleccionEmpleado,
  });
  return presentarEmpleado(empleado);
}

// Construye data solo con propiedades recibidas para conservar los valores omitidos.
async function actualizarParcial(id: number, datos: DatosEmpleadoParcial) {
  const data: {
    nombre?: string;
    apellido?: string;
    cargo?: string | null;
    email?: string | null;
    telefono?: string | null;
    fechaIngreso?: Date | null;
  } = {};

  if (datos.nombre !== undefined) data.nombre = datos.nombre;
  if (datos.apellido !== undefined) data.apellido = datos.apellido;
  if (datos.cargo !== undefined) data.cargo = datos.cargo;
  if (datos.email !== undefined) data.email = datos.email;
  if (datos.telefono !== undefined) data.telefono = datos.telefono;
  if (datos.fecha_ingreso !== undefined) {
    data.fechaIngreso =
      datos.fecha_ingreso === null || datos.fecha_ingreso === ''
        ? null
        : new Date(datos.fecha_ingreso);
  }

  const empleado = await prisma.empleado.update({
    where: { id },
    data,
    select: seleccionEmpleado,
  });
  return presentarEmpleado(empleado);
}

// Verifica si un empleado tiene ventas asociadas; devuelve true o false
async function tieneVentas(id: number) {
  const cantidad = await prisma.pedido.count({
    where: { empleadoId: id },
  });
  return cantidad > 0;
}

// Elimina el empleado por ID; si tiene ventas asociadas, Prisma lanzará un error de integridad referencial
async function eliminar(id: number) {
  await prisma.empleado.delete({ where: { id } });
}

export { listar, obtener, crear, actualizar, actualizarParcial, tieneVentas, eliminar };
