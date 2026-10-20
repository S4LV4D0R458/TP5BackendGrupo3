import { prisma } from '../config/prisma.js';

type ProductoMasVendido = {
  producto_id: number;
  producto: string;
  unidades_vendidas: bigint;
  pedidos_distintos: bigint;
};

async function productosMasVendidos(limite: number) {
  const rows = await prisma.$queryRaw<ProductoMasVendido[]>`
    SELECT p.id AS producto_id,
           p.nombre AS producto,
           CAST(SUM(dp.cantidad) AS UNSIGNED) AS unidades_vendidas,
           COUNT(DISTINCT pe.id) AS pedidos_distintos
    FROM productos p
    INNER JOIN detalle_pedido dp ON dp.producto_id = p.id
    INNER JOIN pedidos pe ON pe.id = dp.pedido_id
    WHERE pe.estado <> 'cancelado'
    GROUP BY p.id, p.nombre
    ORDER BY unidades_vendidas DESC, p.nombre ASC
    LIMIT ${limite}
  `;

  return rows.map((row) => {
    const unidadesVendidas = Number(row.unidades_vendidas);
    const pedidosDistintos = Number(row.pedidos_distintos);
    if (!Number.isSafeInteger(unidadesVendidas) || !Number.isSafeInteger(pedidosDistintos)) {
      throw new RangeError('Los totales del informe exceden el rango entero seguro de JavaScript');
    }

    return {
      producto_id: row.producto_id,
      producto: row.producto,
      unidades_vendidas: unidadesVendidas,
      pedidos_distintos: pedidosDistintos,
    };
  });
}

export { productosMasVendidos };
