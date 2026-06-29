"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaldoInsuficienteException = void 0;
const common_1 = require("@nestjs/common");
class SaldoInsuficienteException extends common_1.HttpException {
    constructor(saldoAtual, valorTentado) {
        super(`Operação negada: saldo de R$${saldoAtual} é insuficiente para retirar R$${valorTentado}.`, common_1.HttpStatus.UNPROCESSABLE_ENTITY);
    }
}
exports.SaldoInsuficienteException = SaldoInsuficienteException;
//# sourceMappingURL=saldo-insuficiente.exception.js.map