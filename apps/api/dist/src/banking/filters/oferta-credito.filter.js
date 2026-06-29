"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var OfertaCreditoFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.OfertaCreditoFilter = void 0;
const common_1 = require("@nestjs/common");
const saldo_insuficiente_exception_1 = require("../exceptions/saldo-insuficiente.exception");
let OfertaCreditoFilter = OfertaCreditoFilter_1 = class OfertaCreditoFilter {
    logger = new common_1.Logger(OfertaCreditoFilter_1.name);
    catch(exception, host) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const request = ctx.getRequest();
        const status = exception.getStatus();
        this.logger.warn(`[${request.method}] ${request.url} - Tentativa de retirada sem saldo suficiente.`);
        response.status(status).json({
            erro: 'Regra de Negócio Violada',
            mensagem: exception.message,
            sugestaoAutomatica: 'Deseja cadastrar uma entrada de estoque antes de realizar esta retirada?',
            data: new Date().toISOString(),
        });
    }
};
exports.OfertaCreditoFilter = OfertaCreditoFilter;
exports.OfertaCreditoFilter = OfertaCreditoFilter = OfertaCreditoFilter_1 = __decorate([
    (0, common_1.Catch)(saldo_insuficiente_exception_1.SaldoInsuficienteException)
], OfertaCreditoFilter);
//# sourceMappingURL=oferta-credito.filter.js.map