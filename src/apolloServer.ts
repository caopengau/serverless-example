import { ApolloServer } from "apollo-server-lambda";
import { buildSchemaSync } from "type-graphql";
import { PostResolver } from "./resolver/post.resolver";
import { Container } from "typedi";
import { contextDb } from "./dbUtil";

const schema = buildSchemaSync({
  resolvers: [PostResolver],
  // register the 3rd party IOC container
  container: Container
});
// const schema = makeExecutableSchema({ typeDefs, resolvers });
export const server = new ApolloServer({
  schema,
  // By default, the GraphQL Playground interface and GraphQL introspection
  // is disabled in "production" (i.e. when `process.env.NODE_ENV` is `production`).
  //
  // If you'd like to have GraphQL Playground and introspection enabled in production,
  // the `playground` and `introspection` options must be set explicitly to `true`.
  // playground: true,
  // introspection: true
  context: contextDb
});
