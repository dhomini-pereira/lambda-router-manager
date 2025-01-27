import { APIGatewayProxyEvent } from "aws-lambda";
import { IRequest } from "../interfaces/request.interface";

export class EventParser {
  constructor(private event: APIGatewayProxyEvent) {}

  public parse(): IRequest {
    return {
      body: this.event.body ? JSON.parse(this.event.body) : {},
      path: this.event.path,
      query: this.event.queryStringParameters as Record<string, string>,
      headers: this.event.headers as Record<string, string>,
      isBase64: this.event.isBase64Encoded,
      method: this.event.httpMethod,
      params: this.event.pathParameters as Record<string, string>,
      url: this.event.requestContext.domainName as string,
      stage: this.event.requestContext.stage,
    };
  }
}
