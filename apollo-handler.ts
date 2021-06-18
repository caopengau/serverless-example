import "reflect-metadata";

import lambdaPlayground from "graphql-playground-middleware-lambda";

import { server } from "./src/apolloServer";

exports.graphqlHandler = server.createHandler();

exports.playgroundHandler = lambdaPlayground({ endpoint: "/graphql" });
