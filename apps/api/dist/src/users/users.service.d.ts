import { CreateUserDto } from './dto/create-user.dto';
import { User } from './interfaces/user.interface';
export declare class UsersService {
    private users;
    create(user: CreateUserDto): User;
    findAll(filter?: string, page?: number): User[];
    findOne(id: number): User;
}
