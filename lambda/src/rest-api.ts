import express from 'express';
import { OpenAPI, useSofa } from 'sofa-api';
import { schema } from './schema';

const basePath = '/api';

const openApi = OpenAPI({
  schema,
  info: {
    title: 'Myenergi DSR',
    version: '0.1.0',
  },
});

const restMiddleware = useSofa({
  schema,
  basePath,
  onRoute(info) {
    openApi.addRoute(info, {
      basePath,
    });
  },
});

const app = express();

app.use('/api', restMiddleware);

export { openApi, app };
