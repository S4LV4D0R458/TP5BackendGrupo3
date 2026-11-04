declare function productosMasVendidos(limite: number): Promise<{
    producto_id: number;
    producto: string;
    unidades_vendidas: number;
    pedidos_distintos: number;
}[]>;
export { productosMasVendidos };
//# sourceMappingURL=reportes.repository.d.ts.map