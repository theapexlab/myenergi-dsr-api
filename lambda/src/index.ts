import { gql } from 'apollo-server-lambda';
import express from 'express';
// import http from 'http';
// import getStream from 'get-stream';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { useSofa } from 'sofa-api';

import serverlessExpress from '@vendia/serverless-express';
// import serverless from 'serverless-http';

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

// const server = new ApolloServer({ typeDefs, resolvers });

// server.applyMiddleware({ app });

export const app = express();

app.get('/hello', function (req, res) {
  res.send('hello world');
});

app.use(
  '/rest',
  useSofa({
    basePath: '/rest',
    schema,
  })
);

export const helloHandler = serverlessExpress({ app });
