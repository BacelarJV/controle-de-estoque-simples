import { CreateProductDto } from './dto/create-product.dto';
import { ProductService } from './product.service';
export declare class ProductController {
    private readonly productService;
    constructor(productService: ProductService);
    create(data: CreateProductDto): import(".prisma/client").Prisma.Prisma__ProductClient<{
        id: number;
        name: string;
        quantity: number;
        price: number;
        createdAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<({
        movements: {
            id: number;
            quantity: number;
            createdAt: Date;
            type: string;
            productId: number;
        }[];
    } & {
        id: number;
        name: string;
        quantity: number;
        price: number;
        createdAt: Date;
    })[]>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__ProductClient<({
        movements: {
            id: number;
            quantity: number;
            createdAt: Date;
            type: string;
            productId: number;
        }[];
    } & {
        id: number;
        name: string;
        quantity: number;
        price: number;
        createdAt: Date;
    }) | null, null, import("@prisma/client/runtime/library").DefaultArgs>;
    update(id: number, data: Partial<CreateProductDto>): import(".prisma/client").Prisma.Prisma__ProductClient<{
        id: number;
        name: string;
        quantity: number;
        price: number;
        createdAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__ProductClient<{
        id: number;
        name: string;
        quantity: number;
        price: number;
        createdAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
