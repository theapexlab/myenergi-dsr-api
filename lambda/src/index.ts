import { gql, ApolloServer } from 'apollo-server-lambda';
import express from 'express';

import { makeExecutableSchema } from '@graphql-tools/schema';
import { useSofa, OpenAPI } from 'sofa-api';
// const swaggerUi = require('swagger-ui-express');

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

const openApi = OpenAPI({
  schema,
  info: {
    title: 'Myenergi DSR',
    version: '0.1.0',
  },
});

const app = express();
app.use(
  '/api',
  useSofa({
    schema,
    basePath: '/api',
    onRoute(info) {
      openApi.addRoute(info, {
        basePath: '/api',
      });
    },
  })
);

// This is WIP
// openApi.save('./swagger.json');
// openApi.save('./swagger.yaml');
// const swaggerDocument = require('./swagger.json');
// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

export const handler = server.createHandler({
  expressAppFromMiddleware(middleware) {
    app.use(middleware);
    return app;
  },
});

export { app };
