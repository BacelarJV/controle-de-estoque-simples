import {
    Body,
    Controller,
    Get,
    Param,
    ParseIntPipe,
    Post,
    Query,
    UseInterceptors,
} from '@nestjs/common';
import { TransformInterceptor } from '../transform/transform.interceptor';
import { CreateUserDto } from './dto/create-user.dto';
import { QueryFilterDto } from './dto/query-filter.dto';
import { UsersService } from './users.service';

@Controller('users')
@UseInterceptors(TransformInterceptor)
export class UsersController {
    constructor(private readonly usersService: UsersService) { }

    @Post()
    createUser(@Body() createUserDto: CreateUserDto) {
        return this.usersService.create(createUserDto);
    }

    @Get()
    findAllUsers(@Query() queryFilter: QueryFilterDto) {
        return this.usersService.findAll(queryFilter.filter, queryFilter.page);
    }

    @Get(':id')
    findOneUser(@Param('id', ParseIntPipe) id: number) {
        return this.usersService.findOne(id);
    }
}