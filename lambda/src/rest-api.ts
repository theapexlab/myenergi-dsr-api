import bodyParser from 'body-parser';
import express from 'express';
import { OpenAPI, useSofa } from 'sofa-api';
import swaggerUi from 'swagger-ui-express';
import { getAPIs } from './data-sources';
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
  async context({ req }) {
    return {
      req,
      dataSources: getAPIs(),
    };
  },
  routes: {
    'Query.deviceStatus': {
      path: '/devices/:serialNo/status',
    },
    'Query.deviceHistory': {
      path: '/devices/:serialNo/history',
    },
    'Query.device': {
      path: '/devices/:serialNo',
    },
    'Query.deviceControlGroup': {
      path: '/devices/:serialNo/control-group',
    },
    'Query.controlGroupDevices': {
      path: '/control-groups/:id/devices',
    },
    'Query.controlGroupStatus': {
      path: '/control-groups/:id/status',
    },
    'Query.controlGroupHistory': {
      path: '/control-groups/:id/history',
    },
    'Mutation.createControlGroup': {
      path: '/control-groups',
      method: 'POST',
    },
    'Mutation.addDeviceToControlGroup': {
      path: '/control-groups/:id/add-device',
      method: 'PUT',
    },
    'Mutation.removeDeviceFromControlGroup': {
      path: '/control-groups/:id/remove-device',
      method: 'PUT',
    },
  },
});

const app = express();

app.use(bodyParser.json());
app.use('/api', restMiddleware);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(openApi.get()));

export { openApi, app };
