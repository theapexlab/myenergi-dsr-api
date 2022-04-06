import bodyParser from 'body-parser';
import express from 'express';
import { OpenAPI, useSofa } from 'sofa-api';
import swaggerUi from 'swagger-ui-express';
import { getAPIs } from './data-sources';
import { schema } from './schema';
import { errorHandlerSofa } from './utils/errorHandler';

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
  errorHandler: errorHandlerSofa,
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
    'Query.deviceControlGroups': {
      path: '/devices/:serialNo/control-groups',
    },
    'Query.controlGroup': {
      path: '/control-groups/:id',
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
    'Query.adminGroup': {
      path: '/admin-groups/:id',
    },
    'Query.adminGroupDevices': {
      path: '/admin-groups/:id/devices',
    },
    'Query.adminGroupStatus': {
      path: '/admin-groups/:id/status',
    },
    'Query.adminGroupHistory': {
      path: '/admin-groups/:id/history',
    },
    'Mutation.createAdminGroup': {
      path: '/admin-groups',
      method: 'POST',
    },
    'Mutation.addDeviceToAdminGroup': {
      path: '/admin-groups/:id/add-device',
      method: 'PUT',
    },
    'Mutation.removeDeviceFromAdminGroup': {
      path: '/admin-groups/:id/remove-device',
      method: 'PUT',
    },
  },
});

const app = express();

app.use(bodyParser.json());
app.use('/api', restMiddleware);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(openApi.get()));
// app.use(errorHandler);

export { openApi, app };
