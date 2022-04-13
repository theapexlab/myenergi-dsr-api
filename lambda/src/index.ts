import { ApolloServer } from 'apollo-server-lambda';
import 'reflect-metadata';
import { getContext } from './context';
import { getAPIs } from './data-sources';
import { app } from './rest-api';
import { schema } from './schema';

const server = new ApolloServer({
  schema,
  context: getContext,
  dataSources: getAPIs,
});

export const handler = server.createHandler({
  expressAppFromMiddleware(middleware) {
    app.use(middleware);
    return app;
  },
});
