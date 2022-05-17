import express from 'express';
import 'reflect-metadata';
import { AppConfig, initApp } from '../lib/initApp';
import { server } from './graphqlServer';
import { openApi } from './openApi';
import { schema } from './schema';
import cors from 'cors';

const config: AppConfig = {
  schema,
  openApi,
};

const app = express();
app.use(cors());
initApp(app, config);

export const handler = server.createHandler({
  expressAppFromMiddleware(middleware) {
    app.use(middleware);
    return app;
  },
});
