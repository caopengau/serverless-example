"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.server = void 0;
const apollo_server_lambda_1 = require("apollo-server-lambda");
const type_graphql_1 = require("type-graphql");
const post_resolver_1 = require("./resolver/post.resolver");
const schema = type_graphql_1.buildSchemaSync({
    resolvers: [post_resolver_1.PostResolver]
});
// const schema = makeExecutableSchema({ typeDefs, resolvers });
exports.server = new apollo_server_lambda_1.ApolloServer({
    schema
    // By default, the GraphQL Playground interface and GraphQL introspection
    // is disabled in "production" (i.e. when `process.env.NODE_ENV` is `production`).
    //
    // If you'd like to have GraphQL Playground and introspection enabled in production,
    // the `playground` and `introspection` options must be set explicitly to `true`.
    // playground: true,
    // introspection: true
});
//# sourceMappingURL=apolloServer.js.map