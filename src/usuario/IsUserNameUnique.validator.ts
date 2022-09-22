import { UsuarioService } from './usuario.service';
import {
  registerDecorator,
  ValidationOptions,
  ValidationArguments,
  ValidatorConstraintInterface,
  ValidatorConstraint,
} from 'class-validator';
import { Injectable } from '@nestjs/common';

@ValidatorConstraint()
@Injectable()
export class IsUserNameUniqueConstraint
  implements ValidatorConstraintInterface
{
  constructor(private usuarioService: UsuarioService) {}
  validate(
    nomeDeUsuario: string,
    validationArguments?: ValidationArguments,
  ): boolean | Promise<boolean> {
    return !!!this.usuarioService.buscaPorNome(nomeDeUsuario);
  }
}

export function IsUserNameUnique(validationOptions?: ValidationOptions) {
  // eslint-disable-next-line @typescript-eslint/ban-types
  return function (object: Object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: IsUserNameUniqueConstraint,
    });
  };
}
