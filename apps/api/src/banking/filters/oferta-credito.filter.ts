import { ArgumentsHost, Catch, ExceptionFilter, Logger } from '@nestjs/common';
import { Request, Response } from 'express';
import { SaldoInsuficienteException } from '../exceptions/saldo-insuficiente.exception';

@Catch(SaldoInsuficienteException)
export class OfertaCreditoFilter implements ExceptionFilter {
    private readonly logger = new Logger(OfertaCreditoFilter.name);

    catch(exception: SaldoInsuficienteException, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse<Response>();
        const request = ctx.getRequest<Request>();
        const status = exception.getStatus();

        this.logger.warn(
            `[${request.method}] ${request.url} - Tentativa de retirada sem saldo suficiente.`,
        );

        response.status(status).json({
            erro: 'Regra de Negócio Violada',
            mensagem: exception.message,
            sugestaoAutomatica:
                'Deseja cadastrar uma entrada de estoque antes de realizar esta retirada?',
            data: new Date().toISOString(),
        });
    }
}