import EventEmitter from "events";
import { IRequest } from "../interfaces/request.interface";
import { IResult } from "../interfaces/Result.interface";
import { MyEmitter } from "./my-emitter.util";

type Response = {
  send: (data: IResult) => void;
};

export class Router {
  private routes: {
    method: string;
    path: string;
    handler: (request: IRequest, response: Response) => void | Promise<void>;
  }[] = [];
  constructor(private request: IRequest, private response: MyEmitter) {}

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
    const route = this.routes.find((v) => {
      const routePattern = v.path.replace(/\{[^}]+\}/g, "([^/]+)");
      const regex = new RegExp(`^${routePattern}$`);

      return (
        v.method.toUpperCase() === this.request.method.toUpperCase() &&
        regex.test(this.request.path)
      );
    });

    if (!route) {
      return this.response.emit("response", {
        body: "Not Found",
        statusCode: 404,
      });
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
        response: { send: (data: IResult) => void }
      ) => void | Promise<void>;
    }[]
  ) {
    this.routes.push(...routes);
  }
}
