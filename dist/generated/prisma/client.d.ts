import * as runtime from "@prisma/client/runtime/client";
import * as $Class from "./internal/class.js";
import * as Prisma from "./internal/prismaNamespace.js";
export * as $Enums from './enums.js';
export * from "./enums.js";
/**
 * ## Prisma Client
 *
 * Type-safe database client for TypeScript
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Proveedors
 * const proveedors = await prisma.proveedor.findMany()
 * ```
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export declare const PrismaClient: $Class.PrismaClientConstructor;
export type PrismaClient<LogOpts extends Prisma.LogLevel = never, OmitOpts extends Prisma.PrismaClientOptions["omit"] = Prisma.PrismaClientOptions["omit"], ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = $Class.PrismaClient<LogOpts, OmitOpts, ExtArgs>;
export { Prisma };
/**
 * Model Proveedor
 *
 */
export type Proveedor = Prisma.ProveedorModel;
/**
 * Model Categoria
 *
 */
export type Categoria = Prisma.CategoriaModel;
/**
 * Model Producto
 *
 */
export type Producto = Prisma.ProductoModel;
/**
 * Model Cliente
 *
 */
export type Cliente = Prisma.ClienteModel;
/**
 * Model Empleado
 *
 */
export type Empleado = Prisma.EmpleadoModel;
/**
 * Model CompaniaEnvio
 *
 */
export type CompaniaEnvio = Prisma.CompaniaEnvioModel;
/**
 * Model Pedido
 *
 */
export type Pedido = Prisma.PedidoModel;
/**
 * Model DetallePedido
 *
 */
export type DetallePedido = Prisma.DetallePedidoModel;
//# sourceMappingURL=client.d.ts.map