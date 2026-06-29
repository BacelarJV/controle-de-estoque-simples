import { Injectable, NotFoundException } from '@nestjs/common';
import { Produto } from './interfaces/produto.interface';

@Injectable()
export class ProdutosService {
    private produtos: Produto[] = [];

    create(produto: Produto) {
        this.produtos.push(produto);
        return produto;
    }

    findAll() {
        return this.produtos;
    }

    findOne(id: string) {
        const produto = this.produtos.find((produto) => produto.id === id);

        if (!produto) {
            throw new NotFoundException('Produto não encontrado');
        }

        return produto;
    }

    update(id: string, data: Partial<Produto>) {
        const produto = this.findOne(id);
        Object.assign(produto, data);
        return produto;
    }

    remove(id: string) {
        const index = this.produtos.findIndex((produto) => produto.id === id);

        if (index === -1) {
            throw new NotFoundException('Produto não encontrado');
        }

        this.produtos.splice(index, 1);
    }
}