import { HttpStatus } from '@nestjs/common';
import { NestResponse } from './nest-response';
export class NestResponseBuilder {
  build(): NestResponse {
    return new NestResponse(this.resposta);
  }
  // eslint-disable-next-line @typescript-eslint/ban-types
  comBody(body: Object) {
    this.resposta.body = body;
    return this;
  }

  // eslint-disable-next-line @typescript-eslint/ban-types
  comHeaders(headers: Object) {
    this.resposta.headers = headers;
    return this;
  }
  comStatus(status: HttpStatus) {
    this.resposta.status = status;
    return this;
  }
  private resposta: NestResponse = {
    status: 200,
    headers: {},
    body: {},
  };
}
