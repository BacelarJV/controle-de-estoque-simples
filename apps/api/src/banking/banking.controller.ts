import {
    Controller,
    Get,
    NotFoundException,
    Param,
    UnauthorizedException,
    UseFilters,
} from '@nestjs/common';
import { SaldoInsuficienteException } from './exceptions/saldo-insuficiente.exception';
import { OfertaCreditoFilter } from './filters/oferta-credito.filter';

@Controller('banking')
@UseFilters(OfertaCreditoFilter)
export class BankingController {
    @Get('conta/:id')
    buscarConta(@Param('id') id: string) {
        if (id !== '123') {
            throw new NotFoundException(
                'A conta solicitada não existe na base de dados.',
            );
        }

        return {
            conta: id,
            saldo: 5000,
        };
    }

    @Get('admin')
    areaRestrita() {
        throw new UnauthorizedException(
            'Você não tem permissão para acessar o painel do gerente.',
        );
    }

    @Get('sacar/:valor')
    sacarDinheiro(@Param('valor') valor: string) {
        const valorSaque = parseInt(valor, 10);
        const saldoAtual = 100;

        if (valorSaque > saldoAtual) {
            throw new SaldoInsuficienteException(saldoAtual, valorSaque);
        }

        return {
            mensagem: 'Retirada realizada com sucesso',
        };
    }
}