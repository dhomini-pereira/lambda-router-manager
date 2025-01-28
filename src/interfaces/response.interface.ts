import { IResult } from "./Result.interface";

export interface IResponse {
  send(data: IResult): void;
}
