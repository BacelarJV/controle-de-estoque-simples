import { ProdutosService } from './produtos.service';
import type { Produto } from './interfaces/produto.interface';
export declare class ProdutosController {
    private readonly produtosService;
    constructor(produtosService: ProdutosService);
    create(body: Produto): Produto;
    findAll(): Produto[];
    findOne(id: string): Produto;
    update(id: string, body: Partial<Produto>): Produto;
    partialUpdate(id: string, body: Partial<Produto>): Produto;
    remove(id: string): void;
}
