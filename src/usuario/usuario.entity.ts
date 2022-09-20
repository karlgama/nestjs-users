import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class Usuario {
  id: number;

  @IsNotEmpty()
  @IsString()
  nomeDeUsuario: string;

  @IsEmail()
  email: string;

  @IsNotEmpty({ message: 'nomeCompleto é obrigatório' })
  senha: string;

  @IsNotEmpty()
  nomeCompleto: string;
  dataDeEntrada: Date;
}
