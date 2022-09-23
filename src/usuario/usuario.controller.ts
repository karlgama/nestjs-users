import { NestResponseBuilder } from './../core/http/nest-response-builder';
import { NestResponse } from './../core/http/nest-response';
import { Usuario } from './usuario.entity';
import { UsuarioService } from './usuario.service';
import {
  Body,
  Controller,
  Get,
  HttpStatus,
  NotFoundException,
  Param,
  Post,
} from '@nestjs/common';

@Controller('users')
export class UsuarioController {
  constructor(private usuarioService: UsuarioService) {}
  @Get(':nome')
  public buscarPorNomeDeUsuario(@Param('nome') nome: string) {
    const user = this.usuarioService.buscaPorNome(nome);
    if (!user) {
      throw new NotFoundException({
        statusCode: HttpStatus.NOT_FOUND,
        message: 'Usuário não encontrado',
      });
    }
    return user;
  }

  @Post()
  criar(@Body() usuario: Usuario): NestResponse {
    const usuarioCriado = this.usuarioService.criar(usuario);
    return new NestResponseBuilder()
      .comStatus(HttpStatus.CREATED)
      .comHeaders({
        Location: `/users/${usuarioCriado.nomeDeUsuario}`,
      })
      .comBody(usuarioCriado)
      .build();
  }
}
