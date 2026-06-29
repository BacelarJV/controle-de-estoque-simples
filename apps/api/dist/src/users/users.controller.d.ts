import { CreateUserDto } from './dto/create-user.dto';
import { QueryFilterDto } from './dto/query-filter.dto';
import { UsersService } from './users.service';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    createUser(createUserDto: CreateUserDto): import("./interfaces/user.interface").User;
    findAllUsers(queryFilter: QueryFilterDto): import("./interfaces/user.interface").User[];
    findOneUser(id: number): import("./interfaces/user.interface").User;
}
