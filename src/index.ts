import { app } from "./app";
import { IRequest } from "./interfaces/request.interface";
import { IResponse } from "./interfaces/response.interface";
import { IRouter } from "./interfaces/router.interface";
import { IResult } from "./interfaces/Result.interface";
import { IEvent } from "./interfaces/event.interface";
import { ControllerModel } from "./models/controller.model";

export { app, ControllerModel };

export type { IRequest, IResponse, IRouter, IResult, IEvent };
