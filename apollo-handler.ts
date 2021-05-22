import lambdaPlayground from "graphql-playground-middleware-lambda";
import { ApolloServer } from "apollo-server-lambda";

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
const server = new ApolloServer({
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

exports.playgroundHandler = lambdaPlayground({
  endpoint: "/dev"
});
