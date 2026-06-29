import { ArgumentsHost, ExceptionFilter } from '@nestjs/common';
import { SaldoInsuficienteException } from '../exceptions/saldo-insuficiente.exception';
export declare class OfertaCreditoFilter implements ExceptionFilter {
    private readonly logger;
    catch(exception: SaldoInsuficienteException, host: ArgumentsHost): void;
}
