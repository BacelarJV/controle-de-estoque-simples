"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BankingController = void 0;
const common_1 = require("@nestjs/common");
const saldo_insuficiente_exception_1 = require("./exceptions/saldo-insuficiente.exception");
const oferta_credito_filter_1 = require("./filters/oferta-credito.filter");
let BankingController = class BankingController {
    buscarConta(id) {
        if (id !== '123') {
            throw new common_1.NotFoundException('A conta solicitada não existe na base de dados.');
        }
        return {
            conta: id,
            saldo: 5000,
        };
    }
    areaRestrita() {
        throw new common_1.UnauthorizedException('Você não tem permissão para acessar o painel do gerente.');
    }
    sacarDinheiro(valor) {
        const valorSaque = parseInt(valor, 10);
        const saldoAtual = 100;
        if (valorSaque > saldoAtual) {
            throw new saldo_insuficiente_exception_1.SaldoInsuficienteException(saldoAtual, valorSaque);
        }
        return {
            mensagem: 'Retirada realizada com sucesso',
        };
    }
};
exports.BankingController = BankingController;
__decorate([
    (0, common_1.Get)('conta/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BankingController.prototype, "buscarConta", null);
__decorate([
    (0, common_1.Get)('admin'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BankingController.prototype, "areaRestrita", null);
__decorate([
    (0, common_1.Get)('sacar/:valor'),
    __param(0, (0, common_1.Param)('valor')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BankingController.prototype, "sacarDinheiro", null);
exports.BankingController = BankingController = __decorate([
    (0, common_1.Controller)('banking'),
    (0, common_1.UseFilters)(oferta_credito_filter_1.OfertaCreditoFilter)
], BankingController);
//# sourceMappingURL=banking.controller.js.map