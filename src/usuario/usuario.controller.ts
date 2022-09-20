import { UsuarioService } from './usuario.service';
import { Body, Controller, Post } from '@nestjs/common';

@Controller('users')
export class UsuarioController {
  constructor(private usuarioService: UsuarioService) {}

  @Post()
  criar(@Body() usuario) {
    return this.usuarioService.criar(usuario);
  }
}
