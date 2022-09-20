import { Usuario } from './usuario.entity';
import { UsuarioService } from './usuario.service';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('users')
export class UsuarioController {
  constructor(private usuarioService: UsuarioService) {}
  @Get(':nome')
  public buscarPorNomeDeUsuario(@Param('nome') nome: string) {
    return this.usuarioService.buscaPorNome(nome);
  }

  @Post()
  criar(@Body() usuario: Usuario) {
    return this.usuarioService.criar(usuario);
  }
}
