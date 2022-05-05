import { GraphQLSchema } from 'graphql';
import { useSofa } from 'sofa-api';
import type { OpenAPI } from 'sofa-api/open-api';
import type { SofaConfig } from 'sofa-api/sofa';
import { getRestContext } from '../context';
import { errorHandlerSofa } from '../utils/errorHandler';

export const routes: SofaConfig['routes'] = {
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
};

export const createSofaMiddleware = (
  schema: GraphQLSchema,
  openApi: ReturnType<typeof OpenAPI>,
  basePath = ''
): ReturnType<typeof useSofa> => {
  return useSofa({
    routes,
    basePath,
    schema,
    errorHandler: errorHandlerSofa,
    onRoute(info) {
      openApi.addRoute(info, { basePath });
    },
    async context(expressContext) {
      return getRestContext(expressContext);
    },
  });
};