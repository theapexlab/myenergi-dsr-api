import 'reflect-metadata';
import express from 'express';
import { AppConfig, initApp } from '../lib/initApp';
import { server } from './graphqlServer';
import { authMiddleware } from './authMiddleware';
import { openApi } from './openApi';
import { schema } from './schema';

const config: AppConfig = {
  schema,
  openApi,
  authMiddleware,
};

const app = express();
initApp(app, config);

export const handler = server.createHandler({
  expressAppFromMiddleware(middleware) {
    app.use(middleware);
    return app;
  },
  expressGetMiddlewareOptions: {
    path: '/graphql',
  },
});
