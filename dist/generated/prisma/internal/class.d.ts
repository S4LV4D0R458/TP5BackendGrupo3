import * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "./prismaNamespace.js";
export type LogOptions<ClientOptions extends Prisma.PrismaClientOptions> = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never;
export interface PrismaClientConstructor {
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
    new <Options extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions, LogOpts extends LogOptions<Options> = LogOptions<Options>, OmitOpts extends Prisma.PrismaClientOptions['omit'] = Options extends {
        omit: infer U;
    } ? U : Prisma.PrismaClientOptions['omit'], ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs>(options: Prisma.PrismaClientConstructorArgs<Options>): PrismaClient<LogOpts, OmitOpts, ExtArgs>;
}
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
export interface PrismaClient<in LogOpts extends Prisma.LogLevel = never, in out OmitOpts extends Prisma.PrismaClientOptions['omit'] = Prisma.PrismaClientOptions['omit'], in out ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['other'];
    };
    $on<V extends LogOpts>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;
    /**
     * Connect with the database
     */
    $connect(): runtime.Types.Utils.JsPromise<void>;
    /**
     * Disconnect from the database
     */
    $disconnect(): runtime.Types.Utils.JsPromise<void>;
    /**
       * Executes a prepared raw query and returns the number of affected rows.
       * @example
       * ```
       * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
       * ```
       *
       * Read more in our [docs](https://pris.ly/d/raw-queries).
       */
    $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;
    /**
     * Executes a raw query and returns the number of affected rows.
     * Susceptible to SQL injections, see documentation.
     * @example
     * ```
     * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
     * ```
     *
     * Read more in our [docs](https://pris.ly/d/raw-queries).
     */
    $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;
    /**
     * Performs a prepared raw query and returns the `SELECT` data.
     * @example
     * ```
     * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
     * ```
     *
     * Read more in our [docs](https://pris.ly/d/raw-queries).
     */
    $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;
    /**
     * Performs a raw query and returns the `SELECT` data.
     * Susceptible to SQL injections, see documentation.
     * @example
     * ```
     * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
     * ```
     *
     * Read more in our [docs](https://pris.ly/d/raw-queries).
     */
    $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;
    /**
     * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
     * @example
     * ```
     * const [george, bob, alice] = await prisma.$transaction([
     *   prisma.user.create({ data: { name: 'George' } }),
     *   prisma.user.create({ data: { name: 'Bob' } }),
     *   prisma.user.create({ data: { name: 'Alice' } }),
     * ])
     * ```
     *
     * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
     */
    $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: Prisma.TransactionIsolationLevel;
    }): runtime.Types.Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;
    $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => runtime.Types.Utils.JsPromise<R>, options?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: Prisma.TransactionIsolationLevel;
    }): runtime.Types.Utils.JsPromise<R>;
    $extends: runtime.Types.Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<OmitOpts>, ExtArgs, runtime.Types.Utils.Call<Prisma.TypeMapCb<OmitOpts>, {
        extArgs: ExtArgs;
    }>>;
    /**
 * `prisma.proveedor`: Exposes CRUD operations for the **Proveedor** model.
  * Example usage:
  * ```ts
  * // Fetch zero or more Proveedors
  * const proveedors = await prisma.proveedor.findMany()
  * ```
  */
    get proveedor(): Prisma.ProveedorDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.categoria`: Exposes CRUD operations for the **Categoria** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Categorias
      * const categorias = await prisma.categoria.findMany()
      * ```
      */
    get categoria(): Prisma.CategoriaDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.producto`: Exposes CRUD operations for the **Producto** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Productos
      * const productos = await prisma.producto.findMany()
      * ```
      */
    get producto(): Prisma.ProductoDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.cliente`: Exposes CRUD operations for the **Cliente** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Clientes
      * const clientes = await prisma.cliente.findMany()
      * ```
      */
    get cliente(): Prisma.ClienteDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.empleado`: Exposes CRUD operations for the **Empleado** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Empleados
      * const empleados = await prisma.empleado.findMany()
      * ```
      */
    get empleado(): Prisma.EmpleadoDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.companiaEnvio`: Exposes CRUD operations for the **CompaniaEnvio** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more CompaniaEnvios
      * const companiaEnvios = await prisma.companiaEnvio.findMany()
      * ```
      */
    get companiaEnvio(): Prisma.CompaniaEnvioDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.pedido`: Exposes CRUD operations for the **Pedido** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Pedidos
      * const pedidos = await prisma.pedido.findMany()
      * ```
      */
    get pedido(): Prisma.PedidoDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.detallePedido`: Exposes CRUD operations for the **DetallePedido** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more DetallePedidos
      * const detallePedidos = await prisma.detallePedido.findMany()
      * ```
      */
    get detallePedido(): Prisma.DetallePedidoDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
}
export declare function getPrismaClientClass(): PrismaClientConstructor;
//# sourceMappingURL=class.d.ts.map