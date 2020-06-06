import { IsInt, IsString, MaxLength, MinLength, IsNumber } from "class-validator";
import { Optional } from "@nestjs/common";

export class CustumerDto {

    @IsInt({ message: 'Não é um inteiro válido!' })
    id:number;

    @IsString({ message: 'Não é uma string válida!' })
    @MinLength(10, { message: 'O campo Nome deve ter no mínimo 03 caracteres.'})
    @MaxLength(20, { message: 'O campo Nome deve ter no máximo 20 caracteres.' })
    nome: string;

    @IsString({ message: 'Não é uma string válida!' })
    @MinLength(3, { message: 'O campo Sobrenome deve ter no mínimo 03 caracteres.' })
    @MaxLength(50, { message: 'O campo Sobrenome deve ter no máximo 50 caracteres.' })
    sobrenome: string;

    @IsString({ message: 'Não é uma string válida!' })
    @MinLength(5, { message: 'O campo Email deve ter no mínimo 05 caracteres.' })
    @MaxLength(80, { message: 'O campo Email deve ter no máximo 30 caracteres.' })
    email: string;

    @IsString({ message: 'Não é uma string válida!' })
    @MinLength(7, { message: 'O campo Phone deve ter no mínimo 07 caracteres.' })
    @MaxLength(20, { message: 'O campo Phone deve ter no máximo 12 caracteres.' })
    phone: string;

    @IsString({ message: 'Não é uma string válida!' })
    @MinLength(10, { message: 'O campo Cpf deve ter no mínimo 11 caracteres.' })
    @MaxLength(12, { message: 'O campo Cpf deve ter no máximo 11 caracteres.' })
    cpf: string;

    @IsString({ message: 'Não é uma string válida!' })
    @MinLength(2, { message: 'O campo Estado deve ter no mínimo 02 caracteres.' })
    @MaxLength(15, { message: 'O campo Estado deve ter no máximo 15 caracteres.' })
    estado: string;

    @IsString({ message: 'Não é uma string válida!' })
    @MinLength(3, { message: 'O campo Cidade deve ter no mínimo 03 caracteres.' })
    @MaxLength(40, { message: 'O campo Cidade deve ter no máximo 40 caracteres.' })
    cidade: string;

    @IsString({ message: 'Não é uma string válida!' })
    @MinLength(3, { message: 'O campo Bairro deve ter no mínimo 03 caracteres.' })
    @MaxLength(50, { message: 'O campo Bairro deve ter no máximo 50 caracteres.' })
    bairro: string;

    @IsString({ message: 'Não é uma string válida!' })
    @MinLength(3, { message: 'O campo Rua deve ter no mínimo 03 caracteres.' })
    @MaxLength(50, { message: 'O campo Rua deve ter no máximo 50 caracteres.' })
    rua: string;

    @Optional()
    @IsString({ message: 'Não é uma string válida!' })
    @MaxLength(15, { message: 'O campo Cep deve ter no máximo 15 caracteres.' })
    cep: string;

}