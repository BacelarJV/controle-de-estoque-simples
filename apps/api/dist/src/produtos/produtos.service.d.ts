import { Produto } from './interfaces/produto.interface';
export declare class ProdutosService {
    private produtos;
    create(produto: Produto): Produto;
    findAll(): Produto[];
    findOne(id: string): Produto;
    update(id: string, data: Partial<Produto>): Produto;
    remove(id: string): void;
}
