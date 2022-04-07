import { ApolloServerPluginDrainHttpServer } from 'apollo-server-core';
import { ApolloServer } from 'apollo-server-express';
import 'dotenv/config';
import http from 'http';
import 'reflect-metadata';
import { getContext } from './context';
import { getAPIs } from './data-sources';
import { app } from './rest-api';
import { schema } from './schema';

export const port = process.env.PORT || 3000;

const bootstrap = async (): Promise<void> => {
  const httpServer = http.createServer(app);
  const server = new ApolloServer({
    schema,
    dataSources: getAPIs,
    context: getContext,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });
  await server.start();
  server.applyMiddleware({
    app,
    path: '/graphql',
  });

  await new Promise<void>((resolve) => httpServer.listen({ port }, resolve));
  console.log(`🚀 Server ready at http://localhost:${port}${server.graphqlPath}`);
};

bootstrap();
