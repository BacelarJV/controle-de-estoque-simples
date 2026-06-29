import { Type } from 'class-transformer';
import {
    IsInt,
    IsString,
    Max,
    Min,
    MinLength,
    ValidateNested,
} from 'class-validator';
import { AddressDto } from './address.dto';

export class CreateUserDto {
    @IsString({ message: 'O nome deve ser uma string válida.' })
    @MinLength(3, { message: 'O nome deve ter no mínimo 3 caracteres.' })
    name: string;

    @IsInt({ message: 'A idade deve ser um número inteiro.' })
    @Min(18, { message: 'A idade mínima é 18 anos.' })
    @Max(100, { message: 'A idade máxima é 100 anos.' })
    @Type(() => Number)
    age: number;

    @ValidateNested({ message: 'O endereço deve ser um objeto válido.' })
    @Type(() => AddressDto)
    address: AddressDto;
}