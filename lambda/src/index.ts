import 'reflect-metadata';
import { ApolloServer } from 'apollo-server-lambda';
import { getAPIs } from './data-sources';
import { app } from './rest-api';
import { schema } from './schema';

const server = new ApolloServer({
  schema,
  dataSources: getAPIs,
});

export const handler = server.createHandler({
  expressAppFromMiddleware(middleware) {
    app.use(middleware);
    return app;
  },
});
