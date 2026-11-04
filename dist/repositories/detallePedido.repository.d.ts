interface CrearDetalleInput {
    producto_id: number;
    cantidad: number;
    descuento?: number | 0;
}
interface ActualizarDetalleInput {
    cantidad: number;
    precio_unitario: number;
    descuento?: number | 0;
}
declare function listar(pedidoId: number): Promise<{
    pedido_id: number;
    producto_id: number;
    producto: string;
    cantidad: number;
    precio_unitario: number;
    descuento: number;
    importe: number;
}[]>;
declare function obtener(pedidoId: number, productoId: number): Promise<{
    pedido_id: number;
    producto_id: number;
    producto: string;
    cantidad: number;
    precio_unitario: number;
    descuento: number;
    importe: number;
} | undefined>;
declare function crear(pedidoId: number, { producto_id, cantidad, descuento }: CrearDetalleInput): Promise<void>;
declare function actualizar(pedidoId: number, productoId: number, { cantidad, precio_unitario, descuento }: ActualizarDetalleInput): Promise<void>;
declare function eliminar(pedidoId: number, productoId: number): Promise<void>;
export { listar, obtener, crear, actualizar, eliminar };
//# sourceMappingURL=detallePedido.repository.d.ts.map