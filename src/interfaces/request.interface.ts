export interface IRequest {
  body: JSON;
  path: string;
  query: Record<string, string>;
  headers: Record<string, string>;
  isBase64: boolean;
  method: string;
  params: Record<string, string>;
  url: string;
  stage: string;
}
