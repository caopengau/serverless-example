import {
  APIGatewayProxyEvent,
  APIGatewayProxyEventV2,
  Context
} from "aws-lambda";
import serverless from "serverless-http";
import expressServer from "./src/expressServer";

const handler = serverless(expressServer);
exports.handler = async (
  event: APIGatewayProxyEvent | APIGatewayProxyEventV2,
  context: Context
) => {
  // you can do other things here
  const result = await handler(event, context);
  // and here
  return result;
};
