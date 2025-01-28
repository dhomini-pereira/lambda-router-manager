import { IRequest } from "../interfaces/request.interface";
import { IEvent } from "../interfaces/event.interface";

export class EventParser {
  constructor(private event: IEvent) {}

  public parse(): IRequest {
    return {
      body: this.event.body ? JSON.parse(this.event.body) : {},
      path: this.event.path,
      query: this.event.queryStringParameters,
      headers: this.event.headers as Record<string, string>,
      isBase64: this.event.isBase64Encoded,
      method: this.event.httpMethod,
      params: this.event.pathParameters as Record<string, string>,
      url: this.event.requestContext.domainName as string,
      stage: this.event.requestContext.stage,
    };
  }
}
