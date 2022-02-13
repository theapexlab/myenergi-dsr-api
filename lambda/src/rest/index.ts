import { makeExecutableSchema } from '@graphql-tools/schema';
import { gql } from 'apollo-server-lambda';
import express from 'express';
import { OpenAPI, useSofa } from 'sofa-api';
import serverless from 'serverless-http';
// import swaggerUi from 'swagger-ui-express';
// import swaggerDocument from '../../../swagger.json';

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
const openApi = OpenAPI({
  schema,
  info: {
    title: 'DSR REST API',
  },
});

const app = express();

const basePath = '/rest';

app.use(
  basePath,
  useSofa({
    basePath,
    schema,
    onRoute(info) {
      openApi.addRoute(info, { basePath });
    },
  })
);

// openApi.save('./swagger.json');

// app.use(basePath, swaggerUi.serve, swaggerUi.setup(swaggerDocument));

export const restHandler = serverless(app);
