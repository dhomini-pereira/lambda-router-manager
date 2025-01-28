import { EventParser } from "./utils/event-parse.util";
import { Router } from "./utils/router.util";
import { IRouter } from "./interfaces/router.interface";
import { IEvent } from "./interfaces/event.interface";
import { MyEmitter } from "./utils/my-emitter.util";

export const app = async (event: IEvent, routes: IRouter[]) => {
  const response = new MyEmitter();
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
