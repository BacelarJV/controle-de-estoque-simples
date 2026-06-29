import { HttpException, HttpStatus } from '@nestjs/common';

export class SaldoInsuficienteException extends HttpException {
    constructor(saldoAtual: number, valorTentado: number) {
        super(
            `Operação negada: saldo de R$${saldoAtual} é insuficiente para retirar R$${valorTentado}.`,
            HttpStatus.UNPROCESSABLE_ENTITY,
        );
    }
}
