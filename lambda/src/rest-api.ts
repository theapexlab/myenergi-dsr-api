import express from 'express';
import { OpenAPI, useSofa } from 'sofa-api';
import swaggerUi from 'swagger-ui-express';
import { schema } from './schema';
import { getAPIs } from './data-sources';

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
  async context({ req }) {
    return {
      req,
      dataSources: getAPIs(),
    };
  },
  routes: {
    'Query.deviceStatus': {
      path: '/device/:id/status',
    },
  },
  depthLimit: 3,
});

const app = express();

app.use('/api', restMiddleware);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(openApi.get()));

export { openApi, app };
