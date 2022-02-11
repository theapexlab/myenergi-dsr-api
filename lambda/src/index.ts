import { ApolloServer, gql } from 'apollo-server-lambda';
import express from 'express';
import http from 'http';
import getStream from 'get-stream';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { createSofaRouter, useSofa } from 'sofa-api';
import serverless from 'serverless-http';

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type Query {
    hello: String
  }
`;

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    hello: () => 'Hello Myenergi!',
  },
};
const schema = makeExecutableSchema({ typeDefs, resolvers });

const server = new ApolloServer({ typeDefs, resolvers });

// server.applyMiddleware({ app });

const app = express();

app.use(
  '/rest',
  useSofa({
    basePath: '/rest',
    schema,
  })
);
// export const helloHandler = serverless(app);

export const helloHandler = server.createHandler();

// const invokeSofa = createSofaRouter({
//   basePath: '/api',
//   schema,
// });
