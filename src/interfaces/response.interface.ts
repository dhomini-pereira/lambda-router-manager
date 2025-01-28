import { IResult } from "./result.interface";

export interface IResponse {
  send(data: IResult): void;
}
