import 'reflect-metadata';
import { ApolloServerPluginDrainHttpServer } from 'apollo-server-core';
import { ApolloServer } from 'apollo-server-express';
import http from 'http';
import { app } from './rest-api';
import { schema } from './schema';
import dotenv from 'dotenv';
import { getAPIs } from './data-sources';

export const port = process.env.PORT || 3000;

dotenv.config();

const bootstrap = async (): Promise<void> => {
  const httpServer = http.createServer(app);
  const server = new ApolloServer({
    schema,
    dataSources: getAPIs,
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
