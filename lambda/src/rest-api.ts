import bodyParser from 'body-parser';
import express from 'express';
import expressBasicAuth from 'express-basic-auth';
import jwtAuth from 'express-jwt';
import * as path from 'path';
import { OpenAPI, useSofa } from 'sofa-api';
import swaggerUi from 'swagger-ui-express';
import { auth, env, superAdmin } from './config';
import { getRestContext } from './context';
import { testJwt } from './middlewares/testJwt';
import { adminSchema, schema } from './schema';
import { errorHandlerSofa } from './utils/errorHandler';

const jwksClient = require('jwks-rsa');
const basePath = '/api';
const adminBasePath = '/admin-api';
const region = auth.region;
const UserPoolId = auth.userPoolId;
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
  async context(expressContext) {
    return getRestContext(expressContext);
  },
  routes: {
    'Query.deviceAdress': {
      path: '/devices/:serialNo/address',
    },
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
  async context(expressContext) {
    return getRestContext(expressContext);
  },
});

const app = express();

app.use(bodyParser.json());

app.use(
  env === 'test'
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
if (env !== 'production') {
  app.use(`${adminBasePath}-docs`, swaggerUi.serve, (_req, res) => {
    const html = swaggerUi.generateHTML(adminOpenApi.get());
    res.send(html);
  });
}
app.use(
  adminBasePath,
  env === 'test'
    ? testJwt
    : expressBasicAuth({
        users: { [superAdmin.username]: superAdmin.password },
      }),
  adminMiddleware
);
app.get(
  '/superadmin',
  expressBasicAuth({
    users: { [superAdmin.username]: superAdmin.password },
    challenge: true,
    realm: superAdmin.realm ?? 'Imb4T3st4pp',
  }),
  (_req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
  }
);

export { openApi, app };
