import bodyParser from 'body-parser';
import cors from 'cors';
import { Express, RequestHandler } from 'express';
import { GraphQLSchema } from 'graphql';
import { OpenAPI } from 'sofa-api';
import swaggerUi from 'swagger-ui-express';
import { env } from './config';
import { createSofaMiddleware, testJwt } from './middlewares';

export interface AppConfig {
  schema: GraphQLSchema;
  openApi: ReturnType<typeof OpenAPI>;
  basePath?: string;
  graphqlPath?: string;
  authMiddleware: RequestHandler;
}

export const initApp = (app: Express, config: AppConfig): void => {
  const { schema, openApi, basePath = '', graphqlPath = '/graphql', authMiddleware } = config;
  const docsPath = basePath === '' ? '/api-docs' : `${basePath}/docs`;
  app.use(cors({ origin: '*' }));
  app.use(basePath || '/', env === 'test' ? testJwt : authMiddleware);
  app.use(graphqlPath, env === 'test' ? testJwt : authMiddleware);
  const restMiddleware = createSofaMiddleware(schema, openApi, basePath);
  app.use(bodyParser.json());
  app.use(basePath, restMiddleware);
  app.use(docsPath, swaggerUi.serve, (...args) => swaggerUi.setup(openApi.get())(...args));
};