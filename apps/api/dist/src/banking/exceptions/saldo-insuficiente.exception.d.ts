import { HttpException } from '@nestjs/common';
export declare class SaldoInsuficienteException extends HttpException {
    constructor(saldoAtual: number, valorTentado: number);
}
