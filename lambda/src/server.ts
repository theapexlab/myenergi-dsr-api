import { ApolloServerPluginDrainHttpServer } from 'apollo-server-core';
import { ApolloServer } from 'apollo-server-express';
import http from 'http';
import 'reflect-metadata';
import swaggerUi from 'swagger-ui-express';
import { app } from './rest-api';
import { schema } from './schema';
import swaggerDocument from './swagger.json';

export const port = process.env.PORT || 3000;

const bootstrap = async () => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
  const httpServer = http.createServer(app);
  const server = new ApolloServer({
    schema,
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
