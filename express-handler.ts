import {
  APIGatewayProxyEvent,
  APIGatewayProxyEventV2,
  Context
} from "aws-lambda";
import serverless from "serverless-http";
import app from "./src/app";

const handler = serverless(app);
exports.handler = async (
  event: APIGatewayProxyEvent | APIGatewayProxyEventV2,
  context: Context
) => {
  // you can do other things here
  const result = await handler(event, context);
  // and here
  return result;
};
