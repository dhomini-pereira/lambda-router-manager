import { APIGatewayProxyEvent } from "aws-lambda";
import EventEmitter from "events";
import { EventParser } from "./utils/event-parse.util";
import { Router } from "./utils/router.util";
import { IRouter } from "./interfaces/router.interface";

export const app = async (event: APIGatewayProxyEvent, routes: IRouter[]) => {
  const response = new EventEmitter();
  const data = new EventParser(event).parse();

  const router = new Router(data, response);

  router.addRoutes(routes);

  const promise = new Promise((resolve, _) => {
    response.on("response", (data) => {
      resolve(data);
    });
  });

  await router.run();

  return promise;
};
