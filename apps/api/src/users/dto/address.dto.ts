import { IsString, Length } from 'class-validator';
import { Transform } from 'class-transformer';

export class AddressDto {
    @IsString({ message: 'A cidade deve ser uma string válida.' })
    city: string;

    @IsString({ message: 'O estado deve ser uma string válida.' })
    @Length(2, 2, { message: 'O estado deve conter exatamente 2 caracteres.' })
    @Transform(({ value }) =>
        typeof value === 'string' ? value.trim().toUpperCase() : value,
    )
    state: string;
}