export declare class BankingController {
    buscarConta(id: string): {
        conta: string;
        saldo: number;
    };
    areaRestrita(): void;
    sacarDinheiro(valor: string): {
        mensagem: string;
    };
}
