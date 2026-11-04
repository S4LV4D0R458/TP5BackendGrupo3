import { type EstadoPedido } from '../generated/prisma/client.js';
interface FiltrosPedido {
    cliente_id?: number;
    empleado_id?: number;
    estado?: EstadoPedido;
    desde?: string;
    hasta?: string;
}
interface ItemPedido {
    producto_id: number;
    cantidad: number;
    descuento?: number;
}
interface DatosPedido {
    cliente_id: number;
    empleado_id: number;
    compania_envio_id: number;
    costo_envio?: number;
    items: ItemPedido[];
}
declare function listar({ cliente_id, empleado_id, estado, desde, hasta, }?: FiltrosPedido): Promise<{
    id: number;
    fecha_pedido: Date;
    fecha_envio: Date | null;
    estado: EstadoPedido;
    costo_envio: number;
    cliente_id: number;
    cliente: string;
    empleado_id: number;
    empleado: string;
    compania_envio_id: number;
    compania_envio: string;
    subtotal: number;
    total: number;
}[]>;
declare function obtener(id: number): Promise<{
    id: number;
    fecha_pedido: Date;
    fecha_envio: Date | null;
    estado: EstadoPedido;
    costo_envio: number;
    cliente_id: number;
    cliente: string;
    empleado_id: number;
    empleado: string;
    compania_envio_id: number;
    compania_envio: string;
    subtotal: number;
    total: number;
    detalle: {
        producto_id: number;
        producto: string;
        cantidad: number;
        precio_unitario: number;
        descuento: number;
        importe: number;
    }[];
} | undefined>;
declare function crear({ cliente_id, empleado_id, compania_envio_id, costo_envio, items, }: DatosPedido): Promise<number>;
declare function actualizarEstado(id: number, estado: EstadoPedido): Promise<void>;
declare function eliminar(id: number): Promise<void>;
declare function reportePorCliente(): Promise<{
    cliente_id: number;
    cliente: string;
    cantidad_pedidos: number;
    total_facturado: number;
}[]>;
declare function reportePorEmpleado(): Promise<{
    empleado_id: number;
    empleado: string;
    cantidad_pedidos: number;
    total_vendido: number;
}[]>;
export { listar, obtener, crear, actualizarEstado, eliminar, reportePorCliente, reportePorEmpleado, };
//# sourceMappingURL=pedidos.repository.d.ts.map