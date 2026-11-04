import type { RequestHandler } from 'express';
declare class HttpError extends Error {
    status: number;
    constructor(status: number, message: string);
}
declare const asyncHandler: (fn: RequestHandler) => RequestHandler;
declare const parseId: (valor: unknown, nombre?: string) => number;
declare const numOpcional: (valor: unknown, nombre: string) => number | undefined;
declare const requerir: (body: unknown, campos: string[]) => void;
export { HttpError, asyncHandler, parseId, numOpcional, requerir };
//# sourceMappingURL=http.d.ts.map