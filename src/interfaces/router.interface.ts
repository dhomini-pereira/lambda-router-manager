import { IRequest } from "./request.interface";
import { IResponse } from "./response.interface";

export interface IRouter {
  path: string;
  method: string;
  handler: (req: IRequest, res: IResponse) => void;
}
