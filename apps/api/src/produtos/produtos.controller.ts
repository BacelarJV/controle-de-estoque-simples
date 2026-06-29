import {
    Body,
    Controller,
    Delete,
    Get,
    HttpCode,
    Param,
    Patch,
    Post,
    Put,
} from '@nestjs/common';
import { ProdutosService } from './produtos.service';
import type { Produto } from './interfaces/produto.interface';
@Controller('produtos')
export class ProdutosController {
    constructor(private readonly produtosService: ProdutosService) { }

    @Post()
    @HttpCode(201)
    create(@Body() body: Produto) {
        return this.produtosService.create(body);
    }

    @Get()
    findAll() {
        return this.produtosService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.produtosService.findOne(id);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() body: Partial<Produto>) {
        return this.produtosService.update(id, body);
    }

    @Patch(':id')
    partialUpdate(@Param('id') id: string, @Body() body: Partial<Produto>) {
        return this.produtosService.update(id, body);
    }

    @Delete(':id')
    @HttpCode(204)
    remove(@Param('id') id: string) {
        this.produtosService.remove(id);
    }
}