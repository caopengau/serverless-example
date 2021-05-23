"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const graphql_playground_middleware_lambda_1 = __importDefault(require("graphql-playground-middleware-lambda"));
const apolloServer_1 = require("./src/apolloServer");
exports.graphqlHandler = apolloServer_1.server.createHandler();
exports.playgroundHandler = graphql_playground_middleware_lambda_1.default({ endpoint: "" });
//# sourceMappingURL=apollo-handler.js.map