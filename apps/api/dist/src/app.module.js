"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const database_module_1 = require("./database/database.module");
const usuarios_module_1 = require("./usuarios/usuarios.module");
const produtos_module_1 = require("./produtos/produtos.module");
const users_module_1 = require("./users/users.module");
const logger_middleware_1 = require("./logger/logger.middleware");
const banking_module_1 = require("./banking/banking.module");
const prisma_module_1 = require("./prisma/prisma.module");
const product_module_1 = require("./product/product.module");
let AppModule = class AppModule {
    configure(consumer) {
        consumer.apply(logger_middleware_1.LoggerMiddleware).forRoutes('*');
    }
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [database_module_1.DatabaseModule, usuarios_module_1.UsuariosModule, produtos_module_1.ProdutosModule, users_module_1.UsersModule, banking_module_1.BankingModule, prisma_module_1.PrismaModule, product_module_1.ProductModule],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map