import { EventEmitter } from "events";
import { IResult } from "../interfaces/Result.interface";

interface MyEvents {
  response: (data: IResult) => void;
}

export class MyEmitter extends EventEmitter {
  on<K extends keyof MyEvents>(event: K, listener: MyEvents[K]): this {
    return super.on(event, listener);
  }

  emit<K extends keyof MyEvents>(
    event: K,
    ...args: Parameters<MyEvents[K]>
  ): boolean {
    return super.emit(event, ...args);
  }
}
