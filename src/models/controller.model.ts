export class ControllerModel {
  path: string;
  method: string;

  constructor(options: { path: string; method: string }) {
    this.path = options.path;
    this.method = options.method;
  }
}
