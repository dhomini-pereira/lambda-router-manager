export interface IResult {
  body: string;
  isBase64Encoded?: boolean;
  headers?: Record<string, string>;
  statusCode: number;
}
