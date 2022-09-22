import { Usuario } from './usuario.entity';
import { UsuarioService } from './usuario.service';
import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  Post,
  Res,
} from '@nestjs/common';

@Controller('users')
export class UsuarioController {
  constructor(private usuarioService: UsuarioService) {}
  @Get(':nome')
  public buscarPorNomeDeUsuario(@Param('nome') nome: string) {
    return this.usuarioService.buscaPorNome(nome);
  }

  @Post()
  criar(@Body() usuario: Usuario, @Res() res) {
    const usuarioCriado = this.usuarioService.criar(usuario);
    res
      .status(HttpStatus.CREATED)
      .location(`/users/${usuarioCriado.nomeDeUsuario}`)
      .json(usuarioCriado);
  }
}
