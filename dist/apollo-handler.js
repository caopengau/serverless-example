"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_playground_middleware_lambda_1 = __importDefault(require("graphql-playground-middleware-lambda"));
const apollo_server_lambda_1 = require("apollo-server-lambda");
const typeDefs = `
type Post {
  id: ID!
  title: String
}

type Query {
  posts: [Post]
}
schema {
  query: Query
}
`;
const resolvers = {
    Query: {
        posts() {
            return [{ id: "1", title: "Awesome Post" }];
        }
    }
};
const server = new apollo_server_lambda_1.ApolloServer({
    typeDefs,
    resolvers,
    // By default, the GraphQL Playground interface and GraphQL introspection
    // is disabled in "production" (i.e. when `process.env.NODE_ENV` is `production`).
    //
    // If you'd like to have GraphQL Playground and introspection enabled in production,
    // the `playground` and `introspection` options must be set explicitly to `true`.
    playground: true,
    introspection: true
});
exports.graphqlHandler = server.createHandler();
exports.playgroundHandler = graphql_playground_middleware_lambda_1.default({
    endpoint: "/dev"
});
//# sourceMappingURL=apollo-handler.js.map