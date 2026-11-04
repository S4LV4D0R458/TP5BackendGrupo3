import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models.js';
export type * from './prismaNamespace.js';
export declare const Decimal: typeof runtime.Decimal;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
/**
 * Helper for filtering JSON entries that have `null` on the database (empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const DbNull: import("@prisma/client-runtime-utils").DbNullClass;
/**
 * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
/**
 * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const AnyNull: import("@prisma/client-runtime-utils").AnyNullClass;
export declare const ModelName: {
    readonly Proveedor: 'Proveedor';
    readonly Categoria: 'Categoria';
    readonly Producto: 'Producto';
    readonly Cliente: 'Cliente';
    readonly Empleado: 'Empleado';
    readonly CompaniaEnvio: 'CompaniaEnvio';
    readonly Pedido: 'Pedido';
    readonly DetallePedido: 'DetallePedido';
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: 'ReadUncommitted';
    readonly ReadCommitted: 'ReadCommitted';
    readonly RepeatableRead: 'RepeatableRead';
    readonly Serializable: 'Serializable';
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const ProveedorScalarFieldEnum: {
    readonly id: 'id';
    readonly nombre: 'nombre';
    readonly contacto: 'contacto';
    readonly telefono: 'telefono';
    readonly email: 'email';
    readonly direccion: 'direccion';
    readonly ciudad: 'ciudad';
    readonly activo: 'activo';
    readonly createdAt: 'createdAt';
    readonly updatedAt: 'updatedAt';
};
export type ProveedorScalarFieldEnum = (typeof ProveedorScalarFieldEnum)[keyof typeof ProveedorScalarFieldEnum];
export declare const CategoriaScalarFieldEnum: {
    readonly id: 'id';
    readonly nombre: 'nombre';
    readonly descripcion: 'descripcion';
    readonly createdAt: 'createdAt';
    readonly updatedAt: 'updatedAt';
};
export type CategoriaScalarFieldEnum = (typeof CategoriaScalarFieldEnum)[keyof typeof CategoriaScalarFieldEnum];
export declare const ProductoScalarFieldEnum: {
    readonly id: 'id';
    readonly nombre: 'nombre';
    readonly descripcion: 'descripcion';
    readonly precio: 'precio';
    readonly stock: 'stock';
    readonly categoriaId: 'categoriaId';
    readonly proveedorId: 'proveedorId';
    readonly activo: 'activo';
    readonly createdAt: 'createdAt';
    readonly updatedAt: 'updatedAt';
};
export type ProductoScalarFieldEnum = (typeof ProductoScalarFieldEnum)[keyof typeof ProductoScalarFieldEnum];
export declare const ClienteScalarFieldEnum: {
    readonly id: 'id';
    readonly nombre: 'nombre';
    readonly apellido: 'apellido';
    readonly empresa: 'empresa';
    readonly telefono: 'telefono';
    readonly email: 'email';
    readonly direccion: 'direccion';
    readonly ciudad: 'ciudad';
    readonly createdAt: 'createdAt';
    readonly updatedAt: 'updatedAt';
};
export type ClienteScalarFieldEnum = (typeof ClienteScalarFieldEnum)[keyof typeof ClienteScalarFieldEnum];
export declare const EmpleadoScalarFieldEnum: {
    readonly id: 'id';
    readonly nombre: 'nombre';
    readonly apellido: 'apellido';
    readonly cargo: 'cargo';
    readonly email: 'email';
    readonly telefono: 'telefono';
    readonly fechaIngreso: 'fechaIngreso';
    readonly createdAt: 'createdAt';
    readonly updatedAt: 'updatedAt';
};
export type EmpleadoScalarFieldEnum = (typeof EmpleadoScalarFieldEnum)[keyof typeof EmpleadoScalarFieldEnum];
export declare const CompaniaEnvioScalarFieldEnum: {
    readonly id: 'id';
    readonly nombre: 'nombre';
    readonly telefono: 'telefono';
    readonly email: 'email';
    readonly createdAt: 'createdAt';
    readonly updatedAt: 'updatedAt';
};
export type CompaniaEnvioScalarFieldEnum = (typeof CompaniaEnvioScalarFieldEnum)[keyof typeof CompaniaEnvioScalarFieldEnum];
export declare const PedidoScalarFieldEnum: {
    readonly id: 'id';
    readonly clienteId: 'clienteId';
    readonly empleadoId: 'empleadoId';
    readonly companiaEnvioId: 'companiaEnvioId';
    readonly fechaPedido: 'fechaPedido';
    readonly fechaEnvio: 'fechaEnvio';
    readonly estado: 'estado';
    readonly costoEnvio: 'costoEnvio';
    readonly createdAt: 'createdAt';
    readonly updatedAt: 'updatedAt';
};
export type PedidoScalarFieldEnum = (typeof PedidoScalarFieldEnum)[keyof typeof PedidoScalarFieldEnum];
export declare const DetallePedidoScalarFieldEnum: {
    readonly pedidoId: 'pedidoId';
    readonly productoId: 'productoId';
    readonly cantidad: 'cantidad';
    readonly precioCU: 'precioCU';
    readonly descuento: 'descuento';
    readonly createdAt: 'createdAt';
    readonly updatedAt: 'updatedAt';
};
export type DetallePedidoScalarFieldEnum = (typeof DetallePedidoScalarFieldEnum)[keyof typeof DetallePedidoScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: 'asc';
    readonly desc: 'desc';
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const ProveedorOrderByRelevanceFieldEnum: {
    readonly nombre: 'nombre';
    readonly contacto: 'contacto';
    readonly telefono: 'telefono';
    readonly email: 'email';
    readonly direccion: 'direccion';
    readonly ciudad: 'ciudad';
};
export type ProveedorOrderByRelevanceFieldEnum = (typeof ProveedorOrderByRelevanceFieldEnum)[keyof typeof ProveedorOrderByRelevanceFieldEnum];
export declare const CategoriaOrderByRelevanceFieldEnum: {
    readonly nombre: 'nombre';
    readonly descripcion: 'descripcion';
};
export type CategoriaOrderByRelevanceFieldEnum = (typeof CategoriaOrderByRelevanceFieldEnum)[keyof typeof CategoriaOrderByRelevanceFieldEnum];
export declare const NullsOrder: {
    readonly first: 'first';
    readonly last: 'last';
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
export declare const ProductoOrderByRelevanceFieldEnum: {
    readonly nombre: 'nombre';
    readonly descripcion: 'descripcion';
};
export type ProductoOrderByRelevanceFieldEnum = (typeof ProductoOrderByRelevanceFieldEnum)[keyof typeof ProductoOrderByRelevanceFieldEnum];
export declare const ClienteOrderByRelevanceFieldEnum: {
    readonly nombre: 'nombre';
    readonly apellido: 'apellido';
    readonly empresa: 'empresa';
    readonly telefono: 'telefono';
    readonly email: 'email';
    readonly direccion: 'direccion';
    readonly ciudad: 'ciudad';
};
export type ClienteOrderByRelevanceFieldEnum = (typeof ClienteOrderByRelevanceFieldEnum)[keyof typeof ClienteOrderByRelevanceFieldEnum];
export declare const EmpleadoOrderByRelevanceFieldEnum: {
    readonly nombre: 'nombre';
    readonly apellido: 'apellido';
    readonly cargo: 'cargo';
    readonly email: 'email';
    readonly telefono: 'telefono';
};
export type EmpleadoOrderByRelevanceFieldEnum = (typeof EmpleadoOrderByRelevanceFieldEnum)[keyof typeof EmpleadoOrderByRelevanceFieldEnum];
export declare const CompaniaEnvioOrderByRelevanceFieldEnum: {
    readonly nombre: 'nombre';
    readonly telefono: 'telefono';
    readonly email: 'email';
};
export type CompaniaEnvioOrderByRelevanceFieldEnum = (typeof CompaniaEnvioOrderByRelevanceFieldEnum)[keyof typeof CompaniaEnvioOrderByRelevanceFieldEnum];
//# sourceMappingURL=prismaNamespaceBrowser.d.ts.map