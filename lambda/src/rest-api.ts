import bodyParser from 'body-parser';
import express from 'express';
import expressBasicAuth from 'express-basic-auth';
import jwtAuth from 'express-jwt';
import * as path from 'path';
import { OpenAPI, useSofa } from 'sofa-api';
import swaggerUi from 'swagger-ui-express';
import { getContext } from './context';
import { getAPIs } from './data-sources';
import { testJwt } from './middlewares/testJwt';
import { adminSchema, schema } from './schema';
import { errorHandlerSofa } from './utils/errorHandler';

const jwksClient = require('jwks-rsa');
const basePath = '/api';
const adminBasePath = '/admin-api';
const region = process.env.USER_POOL_REGION;
const UserPoolId = process.env.USER_POOL_ID;
const jwksUri = `https://cognito-idp.${region}.amazonaws.com/${UserPoolId}/.well-known/jwks.json`;

const openApi = OpenAPI({
  schema,
  info: {
    title: 'Myenergi DSR',
    version: '0.1.0',
  },
});

const adminOpenApi = OpenAPI({
  schema: adminSchema,
  info: {
    title: 'Admin - Myenergi DSR',
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
  async context(contextValue) {
    const context = await getContext(contextValue);
    return {
      dataSources: getAPIs(),
      ...context,
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

const adminMiddleware = useSofa({
  schema: adminSchema,
  basePath: adminBasePath,
  onRoute(info) {
    adminOpenApi.addRoute(info, {
      basePath: adminBasePath,
    });
  },
  async context(contextValue) {
    const context = await getContext(contextValue);
    return {
      dataSources: getAPIs(),
      ...context,
    };
  },
});

const app = express();

app.use(bodyParser.json());

app.use(
  process.env.NODE_ENV === 'test'
    ? testJwt
    : jwtAuth({
        secret: jwksClient.expressJwtSecret({
          jwksUri,
        }),
        algorithms: ['RS256'],
        credentialsRequired: false,
      })
);
app.use(basePath, restMiddleware);
app.use(`${basePath}-docs`, swaggerUi.serve, swaggerUi.setup(openApi.get()));
if (process.env.NODE_ENV !== 'production') {
  app.use(`${adminBasePath}-docs`, swaggerUi.serve, (_req, res) => {
    const html = swaggerUi.generateHTML(adminOpenApi.get());
    res.send(html);
  });
}
app.use(
  adminBasePath,
  process.env.NODE_ENV === 'test'
    ? testJwt
    : expressBasicAuth({
        users: { [process.env.ADMIN_USERNAME]: process.env.ADMIN_PASSWORD },
      }),
  adminMiddleware
);
app.get(
  '/superadmin',
  expressBasicAuth({
    users: { [process.env.ADMIN_USERNAME]: process.env.ADMIN_PASSWORD },
    challenge: true,
    realm: process.env.ADMIN_REALM ?? 'Imb4T3st4pp',
  }),
  (_req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
  }
);

export { openApi, app };
