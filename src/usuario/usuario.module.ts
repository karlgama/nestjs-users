import { UsuarioService } from './usuario.service';
import { UsuarioController } from './usuario.controller';
import { Module } from '@nestjs/common';
import { IsUserNameUniqueConstraint } from './IsUserNameUnique.validator';

@Module({
  controllers: [UsuarioController],
  providers: [UsuarioService, IsUserNameUniqueConstraint],
})
export class UsuarioModule {}
