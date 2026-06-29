"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProdutosService = void 0;
const common_1 = require("@nestjs/common");
let ProdutosService = class ProdutosService {
    produtos = [];
    create(produto) {
        this.produtos.push(produto);
        return produto;
    }
    findAll() {
        return this.produtos;
    }
    findOne(id) {
        const produto = this.produtos.find((produto) => produto.id === id);
        if (!produto) {
            throw new common_1.NotFoundException('Produto não encontrado');
        }
        return produto;
    }
    update(id, data) {
        const produto = this.findOne(id);
        Object.assign(produto, data);
        return produto;
    }
    remove(id) {
        const index = this.produtos.findIndex((produto) => produto.id === id);
        if (index === -1) {
            throw new common_1.NotFoundException('Produto não encontrado');
        }
        this.produtos.splice(index, 1);
    }
};
exports.ProdutosService = ProdutosService;
exports.ProdutosService = ProdutosService = __decorate([
    (0, common_1.Injectable)()
], ProdutosService);
//# sourceMappingURL=produtos.service.js.map