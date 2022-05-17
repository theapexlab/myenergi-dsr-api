import { ApolloServerPluginDrainHttpServer } from 'apollo-server-core';
import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import http from 'http';
import 'reflect-metadata';
import path from 'path';
import { openApi as adminOpenApi } from './admin-api/openApi';
import { schema as adminSchema } from './admin-api/schema';
import { openApi as aggregatorOpenApi } from './aggregator-api/openApi';
import { schema as aggregatorSchema } from './aggregator-api/schema';
import { getAPIs } from './lib/data-sources';
import { AppConfig, initApp } from './lib/initApp';
import { isTestEnv } from './lib/utils/helpers';
import { getAggregatorContext } from './aggregator-api/aggregatorContext';
import { getAdminContext } from './admin-api/adminContext';
import { getTestContext } from './lib/utils/testContext';

const bootstrap = async (): Promise<void> => {
  const app = express();
  const aggregatorConfig: AppConfig = {
    schema: aggregatorSchema,
    openApi: aggregatorOpenApi,
    basePath: '/aggregator/api',
    docsPath: '/aggregator/api-docs',
  };
  const adminConfig: AppConfig = {
    schema: adminSchema,
    openApi: adminOpenApi,
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
    context: isTestEnv ? getTestContext : getAdminContext,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });
  const aggregatorServer = new ApolloServer({
    schema: aggregatorSchema,
    dataSources: getAPIs,
    context: isTestEnv ? getTestContext : getAggregatorContext,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });

  await adminServer.start();
  await aggregatorServer.start();
  adminServer.applyMiddleware({
    app,
    path: '/admin',
  });
  aggregatorServer.applyMiddleware({
    app,
    path: '/aggregator',
  });

  await new Promise<void>((resolve) => httpServer.listen({ port: 3000 }, resolve));
  console.log(`🚀 Server ready at http://localhost:${3000}${aggregatorServer.graphqlPath}`);
};

bootstrap();
