import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model CompaniaEnvio
 *
 */
export type CompaniaEnvioModel = runtime.Types.Result.DefaultSelection<Prisma.$CompaniaEnvioPayload>;
export type AggregateCompaniaEnvio = {
    _count: CompaniaEnvioCountAggregateOutputType | null;
    _avg: CompaniaEnvioAvgAggregateOutputType | null;
    _sum: CompaniaEnvioSumAggregateOutputType | null;
    _min: CompaniaEnvioMinAggregateOutputType | null;
    _max: CompaniaEnvioMaxAggregateOutputType | null;
};
export type CompaniaEnvioAvgAggregateOutputType = {
    id: number | null;
};
export type CompaniaEnvioSumAggregateOutputType = {
    id: number | null;
};
export type CompaniaEnvioMinAggregateOutputType = {
    id: number | null;
    nombre: string | null;
    telefono: string | null;
    email: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type CompaniaEnvioMaxAggregateOutputType = {
    id: number | null;
    nombre: string | null;
    telefono: string | null;
    email: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type CompaniaEnvioCountAggregateOutputType = {
    id: number;
    nombre: number;
    telefono: number;
    email: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type CompaniaEnvioAvgAggregateInputType = {
    id?: true;
};
export type CompaniaEnvioSumAggregateInputType = {
    id?: true;
};
export type CompaniaEnvioMinAggregateInputType = {
    id?: true;
    nombre?: true;
    telefono?: true;
    email?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type CompaniaEnvioMaxAggregateInputType = {
    id?: true;
    nombre?: true;
    telefono?: true;
    email?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type CompaniaEnvioCountAggregateInputType = {
    id?: true;
    nombre?: true;
    telefono?: true;
    email?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type CompaniaEnvioAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which CompaniaEnvio to aggregate.
     */
    where?: Prisma.CompaniaEnvioWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of CompaniaEnvios to fetch.
     */
    orderBy?: Prisma.CompaniaEnvioOrderByWithRelationInput | Prisma.CompaniaEnvioOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.CompaniaEnvioWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` CompaniaEnvios from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` CompaniaEnvios.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned CompaniaEnvios
    **/
    _count?: true | CompaniaEnvioCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: CompaniaEnvioAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: CompaniaEnvioSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: CompaniaEnvioMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: CompaniaEnvioMaxAggregateInputType;
};
export type GetCompaniaEnvioAggregateType<T extends CompaniaEnvioAggregateArgs> = {
    [P in keyof T & keyof AggregateCompaniaEnvio]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCompaniaEnvio[P]> : Prisma.GetScalarType<T[P], AggregateCompaniaEnvio[P]>;
};
export type CompaniaEnvioGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CompaniaEnvioWhereInput;
    orderBy?: Prisma.CompaniaEnvioOrderByWithAggregationInput | Prisma.CompaniaEnvioOrderByWithAggregationInput[];
    by: Prisma.CompaniaEnvioScalarFieldEnum[] | Prisma.CompaniaEnvioScalarFieldEnum;
    having?: Prisma.CompaniaEnvioScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CompaniaEnvioCountAggregateInputType | true;
    _avg?: CompaniaEnvioAvgAggregateInputType;
    _sum?: CompaniaEnvioSumAggregateInputType;
    _min?: CompaniaEnvioMinAggregateInputType;
    _max?: CompaniaEnvioMaxAggregateInputType;
};
export type CompaniaEnvioGroupByOutputType = {
    id: number;
    nombre: string;
    telefono: string;
    email: string;
    createdAt: Date;
    updatedAt: Date;
    _count: CompaniaEnvioCountAggregateOutputType | null;
    _avg: CompaniaEnvioAvgAggregateOutputType | null;
    _sum: CompaniaEnvioSumAggregateOutputType | null;
    _min: CompaniaEnvioMinAggregateOutputType | null;
    _max: CompaniaEnvioMaxAggregateOutputType | null;
};
export type GetCompaniaEnvioGroupByPayload<T extends CompaniaEnvioGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<CompaniaEnvioGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof CompaniaEnvioGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], CompaniaEnvioGroupByOutputType[P]> : Prisma.GetScalarType<T[P], CompaniaEnvioGroupByOutputType[P]>;
}>>;
export type CompaniaEnvioWhereInput = {
    AND?: Prisma.CompaniaEnvioWhereInput | Prisma.CompaniaEnvioWhereInput[];
    OR?: Prisma.CompaniaEnvioWhereInput[];
    NOT?: Prisma.CompaniaEnvioWhereInput | Prisma.CompaniaEnvioWhereInput[];
    id?: Prisma.IntFilter<"CompaniaEnvio"> | number;
    nombre?: Prisma.StringFilter<"CompaniaEnvio"> | string;
    telefono?: Prisma.StringFilter<"CompaniaEnvio"> | string;
    email?: Prisma.StringFilter<"CompaniaEnvio"> | string;
    createdAt?: Prisma.DateTimeFilter<"CompaniaEnvio"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"CompaniaEnvio"> | Date | string;
    pedidos?: Prisma.PedidoListRelationFilter;
};
export type CompaniaEnvioOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    telefono?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    pedidos?: Prisma.PedidoOrderByRelationAggregateInput;
    _relevance?: Prisma.CompaniaEnvioOrderByRelevanceInput;
};
export type CompaniaEnvioWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.CompaniaEnvioWhereInput | Prisma.CompaniaEnvioWhereInput[];
    OR?: Prisma.CompaniaEnvioWhereInput[];
    NOT?: Prisma.CompaniaEnvioWhereInput | Prisma.CompaniaEnvioWhereInput[];
    nombre?: Prisma.StringFilter<"CompaniaEnvio"> | string;
    telefono?: Prisma.StringFilter<"CompaniaEnvio"> | string;
    email?: Prisma.StringFilter<"CompaniaEnvio"> | string;
    createdAt?: Prisma.DateTimeFilter<"CompaniaEnvio"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"CompaniaEnvio"> | Date | string;
    pedidos?: Prisma.PedidoListRelationFilter;
}, "id">;
export type CompaniaEnvioOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    telefono?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.CompaniaEnvioCountOrderByAggregateInput;
    _avg?: Prisma.CompaniaEnvioAvgOrderByAggregateInput;
    _max?: Prisma.CompaniaEnvioMaxOrderByAggregateInput;
    _min?: Prisma.CompaniaEnvioMinOrderByAggregateInput;
    _sum?: Prisma.CompaniaEnvioSumOrderByAggregateInput;
};
export type CompaniaEnvioScalarWhereWithAggregatesInput = {
    AND?: Prisma.CompaniaEnvioScalarWhereWithAggregatesInput | Prisma.CompaniaEnvioScalarWhereWithAggregatesInput[];
    OR?: Prisma.CompaniaEnvioScalarWhereWithAggregatesInput[];
    NOT?: Prisma.CompaniaEnvioScalarWhereWithAggregatesInput | Prisma.CompaniaEnvioScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"CompaniaEnvio"> | number;
    nombre?: Prisma.StringWithAggregatesFilter<"CompaniaEnvio"> | string;
    telefono?: Prisma.StringWithAggregatesFilter<"CompaniaEnvio"> | string;
    email?: Prisma.StringWithAggregatesFilter<"CompaniaEnvio"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"CompaniaEnvio"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"CompaniaEnvio"> | Date | string;
};
export type CompaniaEnvioCreateInput = {
    nombre: string;
    telefono: string;
    email: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    pedidos?: Prisma.PedidoCreateNestedManyWithoutCompaniaEnvioInput;
};
export type CompaniaEnvioUncheckedCreateInput = {
    id?: number;
    nombre: string;
    telefono: string;
    email: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    pedidos?: Prisma.PedidoUncheckedCreateNestedManyWithoutCompaniaEnvioInput;
};
export type CompaniaEnvioUpdateInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    telefono?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    pedidos?: Prisma.PedidoUpdateManyWithoutCompaniaEnvioNestedInput;
};
export type CompaniaEnvioUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    telefono?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    pedidos?: Prisma.PedidoUncheckedUpdateManyWithoutCompaniaEnvioNestedInput;
};
export type CompaniaEnvioCreateManyInput = {
    id?: number;
    nombre: string;
    telefono: string;
    email: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type CompaniaEnvioUpdateManyMutationInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    telefono?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CompaniaEnvioUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    telefono?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CompaniaEnvioOrderByRelevanceInput = {
    fields: Prisma.CompaniaEnvioOrderByRelevanceFieldEnum | Prisma.CompaniaEnvioOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type CompaniaEnvioCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    telefono?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type CompaniaEnvioAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type CompaniaEnvioMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    telefono?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type CompaniaEnvioMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    telefono?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type CompaniaEnvioSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type CompaniaEnvioScalarRelationFilter = {
    is?: Prisma.CompaniaEnvioWhereInput;
    isNot?: Prisma.CompaniaEnvioWhereInput;
};
export type CompaniaEnvioCreateNestedOneWithoutPedidosInput = {
    create?: Prisma.XOR<Prisma.CompaniaEnvioCreateWithoutPedidosInput, Prisma.CompaniaEnvioUncheckedCreateWithoutPedidosInput>;
    connectOrCreate?: Prisma.CompaniaEnvioCreateOrConnectWithoutPedidosInput;
    connect?: Prisma.CompaniaEnvioWhereUniqueInput;
};
export type CompaniaEnvioUpdateOneRequiredWithoutPedidosNestedInput = {
    create?: Prisma.XOR<Prisma.CompaniaEnvioCreateWithoutPedidosInput, Prisma.CompaniaEnvioUncheckedCreateWithoutPedidosInput>;
    connectOrCreate?: Prisma.CompaniaEnvioCreateOrConnectWithoutPedidosInput;
    upsert?: Prisma.CompaniaEnvioUpsertWithoutPedidosInput;
    connect?: Prisma.CompaniaEnvioWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.CompaniaEnvioUpdateToOneWithWhereWithoutPedidosInput, Prisma.CompaniaEnvioUpdateWithoutPedidosInput>, Prisma.CompaniaEnvioUncheckedUpdateWithoutPedidosInput>;
};
export type CompaniaEnvioCreateWithoutPedidosInput = {
    nombre: string;
    telefono: string;
    email: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type CompaniaEnvioUncheckedCreateWithoutPedidosInput = {
    id?: number;
    nombre: string;
    telefono: string;
    email: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type CompaniaEnvioCreateOrConnectWithoutPedidosInput = {
    where: Prisma.CompaniaEnvioWhereUniqueInput;
    create: Prisma.XOR<Prisma.CompaniaEnvioCreateWithoutPedidosInput, Prisma.CompaniaEnvioUncheckedCreateWithoutPedidosInput>;
};
export type CompaniaEnvioUpsertWithoutPedidosInput = {
    update: Prisma.XOR<Prisma.CompaniaEnvioUpdateWithoutPedidosInput, Prisma.CompaniaEnvioUncheckedUpdateWithoutPedidosInput>;
    create: Prisma.XOR<Prisma.CompaniaEnvioCreateWithoutPedidosInput, Prisma.CompaniaEnvioUncheckedCreateWithoutPedidosInput>;
    where?: Prisma.CompaniaEnvioWhereInput;
};
export type CompaniaEnvioUpdateToOneWithWhereWithoutPedidosInput = {
    where?: Prisma.CompaniaEnvioWhereInput;
    data: Prisma.XOR<Prisma.CompaniaEnvioUpdateWithoutPedidosInput, Prisma.CompaniaEnvioUncheckedUpdateWithoutPedidosInput>;
};
export type CompaniaEnvioUpdateWithoutPedidosInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    telefono?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CompaniaEnvioUncheckedUpdateWithoutPedidosInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    telefono?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
/**
 * Count Type CompaniaEnvioCountOutputType
 */
export type CompaniaEnvioCountOutputType = {
    pedidos: number;
};
export type CompaniaEnvioCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    pedidos?: boolean | CompaniaEnvioCountOutputTypeCountPedidosArgs;
};
/**
 * CompaniaEnvioCountOutputType without action
 */
export type CompaniaEnvioCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompaniaEnvioCountOutputType
     */
    select?: Prisma.CompaniaEnvioCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * CompaniaEnvioCountOutputType without action
 */
export type CompaniaEnvioCountOutputTypeCountPedidosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PedidoWhereInput;
};
export type CompaniaEnvioSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nombre?: boolean;
    telefono?: boolean;
    email?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    pedidos?: boolean | Prisma.CompaniaEnvio$pedidosArgs<ExtArgs>;
    _count?: boolean | Prisma.CompaniaEnvioCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["companiaEnvio"]>;
export type CompaniaEnvioSelectScalar = {
    id?: boolean;
    nombre?: boolean;
    telefono?: boolean;
    email?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type CompaniaEnvioOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "nombre" | "telefono" | "email" | "createdAt" | "updatedAt", ExtArgs["result"]["companiaEnvio"]>;
export type CompaniaEnvioInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    pedidos?: boolean | Prisma.CompaniaEnvio$pedidosArgs<ExtArgs>;
    _count?: boolean | Prisma.CompaniaEnvioCountOutputTypeDefaultArgs<ExtArgs>;
};
export type $CompaniaEnvioPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "CompaniaEnvio";
    objects: {
        pedidos: Prisma.$PedidoPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        nombre: string;
        telefono: string;
        email: string;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["companiaEnvio"]>;
    composites: {};
};
export type CompaniaEnvioGetPayload<S extends boolean | null | undefined | CompaniaEnvioDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$CompaniaEnvioPayload, S>;
export type CompaniaEnvioCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<CompaniaEnvioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CompaniaEnvioCountAggregateInputType | true;
};
export interface CompaniaEnvioDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['CompaniaEnvio'];
        meta: {
            name: 'CompaniaEnvio';
        };
    };
    /**
     * Find zero or one CompaniaEnvio that matches the filter.
     * @param {CompaniaEnvioFindUniqueArgs} args - Arguments to find a CompaniaEnvio
     * @example
     * // Get one CompaniaEnvio
     * const companiaEnvio = await prisma.companiaEnvio.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CompaniaEnvioFindUniqueArgs>(args: Prisma.SelectSubset<T, CompaniaEnvioFindUniqueArgs<ExtArgs>>): Prisma.Prisma__CompaniaEnvioClient<runtime.Types.Result.GetResult<Prisma.$CompaniaEnvioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one CompaniaEnvio that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CompaniaEnvioFindUniqueOrThrowArgs} args - Arguments to find a CompaniaEnvio
     * @example
     * // Get one CompaniaEnvio
     * const companiaEnvio = await prisma.companiaEnvio.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CompaniaEnvioFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, CompaniaEnvioFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__CompaniaEnvioClient<runtime.Types.Result.GetResult<Prisma.$CompaniaEnvioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first CompaniaEnvio that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompaniaEnvioFindFirstArgs} args - Arguments to find a CompaniaEnvio
     * @example
     * // Get one CompaniaEnvio
     * const companiaEnvio = await prisma.companiaEnvio.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CompaniaEnvioFindFirstArgs>(args?: Prisma.SelectSubset<T, CompaniaEnvioFindFirstArgs<ExtArgs>>): Prisma.Prisma__CompaniaEnvioClient<runtime.Types.Result.GetResult<Prisma.$CompaniaEnvioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first CompaniaEnvio that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompaniaEnvioFindFirstOrThrowArgs} args - Arguments to find a CompaniaEnvio
     * @example
     * // Get one CompaniaEnvio
     * const companiaEnvio = await prisma.companiaEnvio.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CompaniaEnvioFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, CompaniaEnvioFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__CompaniaEnvioClient<runtime.Types.Result.GetResult<Prisma.$CompaniaEnvioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more CompaniaEnvios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompaniaEnvioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CompaniaEnvios
     * const companiaEnvios = await prisma.companiaEnvio.findMany()
     *
     * // Get first 10 CompaniaEnvios
     * const companiaEnvios = await prisma.companiaEnvio.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const companiaEnvioWithIdOnly = await prisma.companiaEnvio.findMany({ select: { id: true } })
     *
     */
    findMany<T extends CompaniaEnvioFindManyArgs>(args?: Prisma.SelectSubset<T, CompaniaEnvioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CompaniaEnvioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a CompaniaEnvio.
     * @param {CompaniaEnvioCreateArgs} args - Arguments to create a CompaniaEnvio.
     * @example
     * // Create one CompaniaEnvio
     * const CompaniaEnvio = await prisma.companiaEnvio.create({
     *   data: {
     *     // ... data to create a CompaniaEnvio
     *   }
     * })
     *
     */
    create<T extends CompaniaEnvioCreateArgs>(args: Prisma.SelectSubset<T, CompaniaEnvioCreateArgs<ExtArgs>>): Prisma.Prisma__CompaniaEnvioClient<runtime.Types.Result.GetResult<Prisma.$CompaniaEnvioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many CompaniaEnvios.
     * @param {CompaniaEnvioCreateManyArgs} args - Arguments to create many CompaniaEnvios.
     * @example
     * // Create many CompaniaEnvios
     * const companiaEnvio = await prisma.companiaEnvio.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends CompaniaEnvioCreateManyArgs>(args?: Prisma.SelectSubset<T, CompaniaEnvioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Delete a CompaniaEnvio.
     * @param {CompaniaEnvioDeleteArgs} args - Arguments to delete one CompaniaEnvio.
     * @example
     * // Delete one CompaniaEnvio
     * const CompaniaEnvio = await prisma.companiaEnvio.delete({
     *   where: {
     *     // ... filter to delete one CompaniaEnvio
     *   }
     * })
     *
     */
    delete<T extends CompaniaEnvioDeleteArgs>(args: Prisma.SelectSubset<T, CompaniaEnvioDeleteArgs<ExtArgs>>): Prisma.Prisma__CompaniaEnvioClient<runtime.Types.Result.GetResult<Prisma.$CompaniaEnvioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one CompaniaEnvio.
     * @param {CompaniaEnvioUpdateArgs} args - Arguments to update one CompaniaEnvio.
     * @example
     * // Update one CompaniaEnvio
     * const companiaEnvio = await prisma.companiaEnvio.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends CompaniaEnvioUpdateArgs>(args: Prisma.SelectSubset<T, CompaniaEnvioUpdateArgs<ExtArgs>>): Prisma.Prisma__CompaniaEnvioClient<runtime.Types.Result.GetResult<Prisma.$CompaniaEnvioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more CompaniaEnvios.
     * @param {CompaniaEnvioDeleteManyArgs} args - Arguments to filter CompaniaEnvios to delete.
     * @example
     * // Delete a few CompaniaEnvios
     * const { count } = await prisma.companiaEnvio.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends CompaniaEnvioDeleteManyArgs>(args?: Prisma.SelectSubset<T, CompaniaEnvioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more CompaniaEnvios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompaniaEnvioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CompaniaEnvios
     * const companiaEnvio = await prisma.companiaEnvio.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends CompaniaEnvioUpdateManyArgs>(args: Prisma.SelectSubset<T, CompaniaEnvioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create or update one CompaniaEnvio.
     * @param {CompaniaEnvioUpsertArgs} args - Arguments to update or create a CompaniaEnvio.
     * @example
     * // Update or create a CompaniaEnvio
     * const companiaEnvio = await prisma.companiaEnvio.upsert({
     *   create: {
     *     // ... data to create a CompaniaEnvio
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CompaniaEnvio we want to update
     *   }
     * })
     */
    upsert<T extends CompaniaEnvioUpsertArgs>(args: Prisma.SelectSubset<T, CompaniaEnvioUpsertArgs<ExtArgs>>): Prisma.Prisma__CompaniaEnvioClient<runtime.Types.Result.GetResult<Prisma.$CompaniaEnvioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of CompaniaEnvios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompaniaEnvioCountArgs} args - Arguments to filter CompaniaEnvios to count.
     * @example
     * // Count the number of CompaniaEnvios
     * const count = await prisma.companiaEnvio.count({
     *   where: {
     *     // ... the filter for the CompaniaEnvios we want to count
     *   }
     * })
    **/
    count<T extends CompaniaEnvioCountArgs>(args?: Prisma.Subset<T, CompaniaEnvioCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], CompaniaEnvioCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a CompaniaEnvio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompaniaEnvioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CompaniaEnvioAggregateArgs>(args: Prisma.Subset<T, CompaniaEnvioAggregateArgs>): Prisma.PrismaPromise<GetCompaniaEnvioAggregateType<T>>;
    /**
     * Group by CompaniaEnvio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompaniaEnvioGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
    **/
    groupBy<T extends CompaniaEnvioGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: CompaniaEnvioGroupByArgs['orderBy'];
    } : {
        orderBy?: CompaniaEnvioGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, CompaniaEnvioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompaniaEnvioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the CompaniaEnvio model
     */
    readonly fields: CompaniaEnvioFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for CompaniaEnvio.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__CompaniaEnvioClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    pedidos<T extends Prisma.CompaniaEnvio$pedidosArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CompaniaEnvio$pedidosArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
/**
 * Fields of the CompaniaEnvio model
 */
export interface CompaniaEnvioFieldRefs {
    readonly id: Prisma.FieldRef<"CompaniaEnvio", 'Int'>;
    readonly nombre: Prisma.FieldRef<"CompaniaEnvio", 'String'>;
    readonly telefono: Prisma.FieldRef<"CompaniaEnvio", 'String'>;
    readonly email: Prisma.FieldRef<"CompaniaEnvio", 'String'>;
    readonly createdAt: Prisma.FieldRef<"CompaniaEnvio", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"CompaniaEnvio", 'DateTime'>;
}
/**
 * CompaniaEnvio findUnique
 */
export type CompaniaEnvioFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompaniaEnvio
     */
    select?: Prisma.CompaniaEnvioSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CompaniaEnvio
     */
    omit?: Prisma.CompaniaEnvioOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CompaniaEnvioInclude<ExtArgs> | null;
    /**
     * Filter, which CompaniaEnvio to fetch.
     */
    where: Prisma.CompaniaEnvioWhereUniqueInput;
};
/**
 * CompaniaEnvio findUniqueOrThrow
 */
export type CompaniaEnvioFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompaniaEnvio
     */
    select?: Prisma.CompaniaEnvioSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CompaniaEnvio
     */
    omit?: Prisma.CompaniaEnvioOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CompaniaEnvioInclude<ExtArgs> | null;
    /**
     * Filter, which CompaniaEnvio to fetch.
     */
    where: Prisma.CompaniaEnvioWhereUniqueInput;
};
/**
 * CompaniaEnvio findFirst
 */
export type CompaniaEnvioFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompaniaEnvio
     */
    select?: Prisma.CompaniaEnvioSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CompaniaEnvio
     */
    omit?: Prisma.CompaniaEnvioOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CompaniaEnvioInclude<ExtArgs> | null;
    /**
     * Filter, which CompaniaEnvio to fetch.
     */
    where?: Prisma.CompaniaEnvioWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of CompaniaEnvios to fetch.
     */
    orderBy?: Prisma.CompaniaEnvioOrderByWithRelationInput | Prisma.CompaniaEnvioOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for CompaniaEnvios.
     */
    cursor?: Prisma.CompaniaEnvioWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` CompaniaEnvios from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` CompaniaEnvios.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of CompaniaEnvios.
     */
    distinct?: Prisma.CompaniaEnvioScalarFieldEnum | Prisma.CompaniaEnvioScalarFieldEnum[];
};
/**
 * CompaniaEnvio findFirstOrThrow
 */
export type CompaniaEnvioFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompaniaEnvio
     */
    select?: Prisma.CompaniaEnvioSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CompaniaEnvio
     */
    omit?: Prisma.CompaniaEnvioOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CompaniaEnvioInclude<ExtArgs> | null;
    /**
     * Filter, which CompaniaEnvio to fetch.
     */
    where?: Prisma.CompaniaEnvioWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of CompaniaEnvios to fetch.
     */
    orderBy?: Prisma.CompaniaEnvioOrderByWithRelationInput | Prisma.CompaniaEnvioOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for CompaniaEnvios.
     */
    cursor?: Prisma.CompaniaEnvioWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` CompaniaEnvios from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` CompaniaEnvios.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of CompaniaEnvios.
     */
    distinct?: Prisma.CompaniaEnvioScalarFieldEnum | Prisma.CompaniaEnvioScalarFieldEnum[];
};
/**
 * CompaniaEnvio findMany
 */
export type CompaniaEnvioFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompaniaEnvio
     */
    select?: Prisma.CompaniaEnvioSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CompaniaEnvio
     */
    omit?: Prisma.CompaniaEnvioOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CompaniaEnvioInclude<ExtArgs> | null;
    /**
     * Filter, which CompaniaEnvios to fetch.
     */
    where?: Prisma.CompaniaEnvioWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of CompaniaEnvios to fetch.
     */
    orderBy?: Prisma.CompaniaEnvioOrderByWithRelationInput | Prisma.CompaniaEnvioOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing CompaniaEnvios.
     */
    cursor?: Prisma.CompaniaEnvioWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` CompaniaEnvios from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` CompaniaEnvios.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of CompaniaEnvios.
     */
    distinct?: Prisma.CompaniaEnvioScalarFieldEnum | Prisma.CompaniaEnvioScalarFieldEnum[];
};
/**
 * CompaniaEnvio create
 */
export type CompaniaEnvioCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompaniaEnvio
     */
    select?: Prisma.CompaniaEnvioSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CompaniaEnvio
     */
    omit?: Prisma.CompaniaEnvioOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CompaniaEnvioInclude<ExtArgs> | null;
    /**
     * The data needed to create a CompaniaEnvio.
     */
    data: Prisma.XOR<Prisma.CompaniaEnvioCreateInput, Prisma.CompaniaEnvioUncheckedCreateInput>;
};
/**
 * CompaniaEnvio createMany
 */
export type CompaniaEnvioCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many CompaniaEnvios.
     */
    data: Prisma.CompaniaEnvioCreateManyInput | Prisma.CompaniaEnvioCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * CompaniaEnvio update
 */
export type CompaniaEnvioUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompaniaEnvio
     */
    select?: Prisma.CompaniaEnvioSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CompaniaEnvio
     */
    omit?: Prisma.CompaniaEnvioOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CompaniaEnvioInclude<ExtArgs> | null;
    /**
     * The data needed to update a CompaniaEnvio.
     */
    data: Prisma.XOR<Prisma.CompaniaEnvioUpdateInput, Prisma.CompaniaEnvioUncheckedUpdateInput>;
    /**
     * Choose, which CompaniaEnvio to update.
     */
    where: Prisma.CompaniaEnvioWhereUniqueInput;
};
/**
 * CompaniaEnvio updateMany
 */
export type CompaniaEnvioUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update CompaniaEnvios.
     */
    data: Prisma.XOR<Prisma.CompaniaEnvioUpdateManyMutationInput, Prisma.CompaniaEnvioUncheckedUpdateManyInput>;
    /**
     * Filter which CompaniaEnvios to update
     */
    where?: Prisma.CompaniaEnvioWhereInput;
    /**
     * Limit how many CompaniaEnvios to update.
     */
    limit?: number;
};
/**
 * CompaniaEnvio upsert
 */
export type CompaniaEnvioUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompaniaEnvio
     */
    select?: Prisma.CompaniaEnvioSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CompaniaEnvio
     */
    omit?: Prisma.CompaniaEnvioOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CompaniaEnvioInclude<ExtArgs> | null;
    /**
     * The filter to search for the CompaniaEnvio to update in case it exists.
     */
    where: Prisma.CompaniaEnvioWhereUniqueInput;
    /**
     * In case the CompaniaEnvio found by the `where` argument doesn't exist, create a new CompaniaEnvio with this data.
     */
    create: Prisma.XOR<Prisma.CompaniaEnvioCreateInput, Prisma.CompaniaEnvioUncheckedCreateInput>;
    /**
     * In case the CompaniaEnvio was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.CompaniaEnvioUpdateInput, Prisma.CompaniaEnvioUncheckedUpdateInput>;
};
/**
 * CompaniaEnvio delete
 */
export type CompaniaEnvioDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompaniaEnvio
     */
    select?: Prisma.CompaniaEnvioSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CompaniaEnvio
     */
    omit?: Prisma.CompaniaEnvioOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CompaniaEnvioInclude<ExtArgs> | null;
    /**
     * Filter which CompaniaEnvio to delete.
     */
    where: Prisma.CompaniaEnvioWhereUniqueInput;
};
/**
 * CompaniaEnvio deleteMany
 */
export type CompaniaEnvioDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which CompaniaEnvios to delete
     */
    where?: Prisma.CompaniaEnvioWhereInput;
    /**
     * Limit how many CompaniaEnvios to delete.
     */
    limit?: number;
};
/**
 * CompaniaEnvio.pedidos
 */
export type CompaniaEnvio$pedidosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: Prisma.PedidoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Pedido
     */
    omit?: Prisma.PedidoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PedidoInclude<ExtArgs> | null;
    where?: Prisma.PedidoWhereInput;
    orderBy?: Prisma.PedidoOrderByWithRelationInput | Prisma.PedidoOrderByWithRelationInput[];
    cursor?: Prisma.PedidoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PedidoScalarFieldEnum | Prisma.PedidoScalarFieldEnum[];
};
/**
 * CompaniaEnvio without action
 */
export type CompaniaEnvioDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompaniaEnvio
     */
    select?: Prisma.CompaniaEnvioSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CompaniaEnvio
     */
    omit?: Prisma.CompaniaEnvioOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CompaniaEnvioInclude<ExtArgs> | null;
};
//# sourceMappingURL=CompaniaEnvio.d.ts.map