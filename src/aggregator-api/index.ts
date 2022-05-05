import express from 'express';
import 'reflect-metadata';
import { AppConfig, initApp } from '../lib/initApp';
import { server } from './graphqlServer';
import { authMiddleware } from './authMiddleware';
import { openApi } from './openApi';
import { schema } from './schema';

const config: AppConfig = {
  schema,
  openApi,
};

const app = express();
app.use(authMiddleware);
initApp(app, config);

export const handler = server.createHandler({
  expressAppFromMiddleware(middleware) {
    app.use(middleware);
    return app;
  },
});
