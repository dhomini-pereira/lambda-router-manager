import EventEmitter from "events";
import { IRequest } from "../interfaces/request.interface";
import { APIGatewayProxyResult } from "aws-lambda";

type Response = {
  send: (data: APIGatewayProxyResult) => void;
};

export class Router {
  private routes: {
    method: string;
    path: string;
    handler: (request: IRequest, response: Response) => void | Promise<void>;
  }[] = [];
  constructor(private request: IRequest, private response: EventEmitter) {}

  addRoute(
    method: string,
    path: string,
    handler: (request: IRequest, response: Response) => void | Promise<void>
  ) {
    this.routes.push({ method, path, handler });
  }

  getRoutes() {
    return this.routes;
  }

  async run() {
    const route = this.routes.find(
      (v) => v.method === this.request.method && v.path === this.request.path
    );

    if (!route) {
      return this.response.emit("response", {
        body: "Not Found",
        statusCode: 404,
      } as APIGatewayProxyResult);
    }

    await route.handler(this.request, {
      send: (data) => this.response.emit("response", data),
    });
  }

  addRoutes(
    routes: {
      path: string;
      method: string;
      handler: (
        request: IRequest,
        response: { send: (data: APIGatewayProxyResult) => void }
      ) => void | Promise<void>;
    }[]
  ) {
    this.routes.push(...routes);
  }
}
