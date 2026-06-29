import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateProductDto } from './dto/create-product.dto';

@Injectable()
export class ProductService {
    constructor(private readonly prisma: PrismaService) { }

    create(data: CreateProductDto) {
        return this.prisma.product.create({ data });
    }

    findAll() {
        return this.prisma.product.findMany({
            include: {
                movements: true,
            },
        });
    }

    findOne(id: number) {
        return this.prisma.product.findUnique({
            where: { id },
            include: {
                movements: true,
            },
        });
    }

    update(id: number, data: Partial<CreateProductDto>) {
        return this.prisma.product.update({
            where: { id },
            data,
        });
    }

    remove(id: number) {
        return this.prisma.product.delete({
            where: { id },
        });
    }
}