/* eslint-disable @typescript-eslint/ban-types */
export class NestResponse {
  status: number;
  headers: Object;
  body: Object;

  constructor(resposta: NestResponse) {
    Object.assign(this, resposta);
  }
}
