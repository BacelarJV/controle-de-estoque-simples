import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { ProdutosModule } from './produtos/produtos.module';
import { UsersModule } from './users/users.module';
import { LoggerMiddleware } from './logger/logger.middleware';
import { BankingModule } from './banking/banking.module';
import { PrismaModule } from './prisma/prisma.module';
import { ProductModule } from './product/product.module';

@Module({
  imports: [DatabaseModule, UsuariosModule, ProdutosModule, UsersModule, BankingModule, PrismaModule, ProductModule],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}