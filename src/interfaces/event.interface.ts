export interface IEvent {
  body: string;
  path: string;
  queryStringParameters: Record<string, string>;
  headers: Record<string, string>;
  isBase64Encoded: boolean;
  httpMethod: string;
  pathParameters: Record<string, string>;
  requestContext: {
    domainName: string;
    stage: string;
  };
}
