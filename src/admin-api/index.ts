import 'reflect-metadata';
import express from 'express';
import path from 'path';
import { server } from './graphqlServer';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();
// todo: whitelist admin postal eg.: /^https:\/\/admin-ui.*/
app.use(cors());
app.use('/ui', express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());

export const handler = server.createHandler({
  expressAppFromMiddleware(middleware) {
    app.use(middleware);
    return app;
  },
});
