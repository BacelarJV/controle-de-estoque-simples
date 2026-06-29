import { Transform } from 'class-transformer';
import { IsInt, IsOptional, IsString, Min } from 'class-validator';

export class QueryFilterDto {
    @IsOptional()
    @IsString({ message: 'O filtro deve ser uma string válida.' })
    @Transform(({ value }) => (typeof value === 'string' ? value.trim() : value))
    filter?: string;

    @IsOptional()
    @IsInt({ message: 'A página deve ser um número inteiro.' })
    @Min(1, { message: 'A página mínima é 1.' })
    @Transform(({ value }) => parseInt(value, 10))
    page?: number;
}