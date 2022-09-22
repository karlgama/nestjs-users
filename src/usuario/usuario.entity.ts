import { Exclude, Expose } from 'class-transformer';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { IsUserNameUnique } from './IsUserNameUnique.validator';

export class Usuario {
  id: number;

  @IsNotEmpty()
  @IsString()
  @IsUserNameUnique({ message: 'nome de usuário precisa ser único' })
  @Expose({
    name: 'username',
  })
  nomeDeUsuario: string;

  @IsEmail()
  email: string;

  @IsNotEmpty({ message: 'nomeCompleto é obrigatório' })
  @Exclude({
    // ao enviar a resposta
    toPlainOnly: true,
  })
  @Expose({
    name: 'password',
  })
  senha: string;

  @IsNotEmpty()
  @Expose({
    name: 'fullname',
  })
  nomeCompleto: string;
  @Expose({
    name: 'joinDate',
  })
  dataDeEntrada: Date;
}
