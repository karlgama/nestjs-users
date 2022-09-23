import { NestResponse } from './nest-response';
import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { map, Observable } from 'rxjs';
import { AbstractHttpAdapter, HttpAdapterHost } from '@nestjs/core';

@Injectable()
export class TransformaRepostaInterceptor implements NestInterceptor {
  private httpAdapter: AbstractHttpAdapter;

  constructor(adapterHost: HttpAdapterHost) {
    this.httpAdapter = adapterHost.httpAdapter;
  }

  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> | Promise<Observable<any>> {
    return next.handle().pipe(
      map((respostaControlador: NestResponse) => {
        if (respostaControlador instanceof NestResponse) {
          const contexto = context.switchToHttp();
          const response = contexto.getResponse();
          const { headers, status, body } = respostaControlador;
          const nomesDosCabecalhos = Object.getOwnPropertyNames(headers);

          nomesDosCabecalhos.forEach((nome) => {
            const valor = headers[nome];
            this.httpAdapter.setHeader(response, nome, valor);
          });
          this.httpAdapter.status(response, status);
          return body;
        }
        return respostaControlador;
      }),
    );
  }
}
