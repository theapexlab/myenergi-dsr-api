import 'reflect-metadata';
import express from 'express';
import path from 'path';
import { AppConfig, initApp } from '../lib/initApp';
import { server } from './graphqlServer';
import { authMiddleware } from './authMiddleware';
import { openApi } from './openApi';
import { schema } from './schema';
import cors from 'cors';

const config: AppConfig = {
  schema,
  openApi,
};

const app = express();
// todo: whitelist admin postal eg.: /^https:\/\/admin-ui.*/
app.use(cors());
app.use(authMiddleware);
app.use('/ui', express.static(path.join(__dirname, 'public')));
initApp(app, config);

export const handler = server.createHandler({
  expressAppFromMiddleware(middleware) {
    app.use(middleware);
    return app;
  },
});
