import { Injectable } from '@nestjs/common';
import { Usuario } from './usuario.entity';

@Injectable()
export class UsuarioService {
  private usuarios: Array<Usuario> = [];

  public criar(usuario: Usuario) {
    this.usuarios.push(usuario);
    return usuario;
  }

  buscaPorNome(nome: string): Usuario {
    return this.usuarios.find((usuario) => usuario.nomeDeUsuario == nome);
  }
}
