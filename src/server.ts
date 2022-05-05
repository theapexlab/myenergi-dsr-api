import { ApolloServerPluginDrainHttpServer } from 'apollo-server-core';
import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import http from 'http';
import 'reflect-metadata';
import path from 'path';
import { authMiddleware as adminAuthMiddleware } from './admin-api/authMiddleware';
import { openApi as adminOpenApi } from './admin-api/openApi';
import { schema as adminSchema } from './admin-api/schema';
import { authMiddleware as aggregatorAuthMiddleware } from './aggregator-api/authMiddleware';
import { openApi as aggregatorOpenApi } from './aggregator-api/openApi';
import { schema as aggregatorSchema } from './aggregator-api/schema';
import { getContext } from './lib/context';
import { getAPIs } from './lib/data-sources';
import { AppConfig, initApp } from './lib/initApp';

const bootstrap = async (): Promise<void> => {
  const app = express();
  const aggregatorConfig: AppConfig = {
    schema: aggregatorSchema,
    openApi: aggregatorOpenApi,
    authMiddleware: aggregatorAuthMiddleware,
    basePath: '/aggregator/api',
    docsPath: '/aggregator/api-docs',
  };
  const adminConfig: AppConfig = {
    schema: adminSchema,
    openApi: adminOpenApi,
    authMiddleware: adminAuthMiddleware,
    basePath: '/admin/api',
    docsPath: '/admin/api-docs',
  };
  initApp(app, adminConfig);
  initApp(app, aggregatorConfig);
  app.use('/admin/superadmin', express.static(path.join(__dirname, 'public')));
  const httpServer = http.createServer(app);

  const adminServer = new ApolloServer({
    schema: adminSchema,
    dataSources: getAPIs,
    context: getContext,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });
  const aggregatorServer = new ApolloServer({
    schema: aggregatorSchema,
    dataSources: getAPIs,
    context: getContext,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });

  await adminServer.start();
  await aggregatorServer.start();
  adminServer.applyMiddleware({
    app,
    path: '/admin-graphql',
  });
  aggregatorServer.applyMiddleware({
    app,
    path: '/graphql',
  });

  await new Promise<void>((resolve) => httpServer.listen({ port: 3000 }, resolve));
  console.log(`🚀 Server ready at http://localhost:${3000}${aggregatorServer.graphqlPath}`);
};

bootstrap();
