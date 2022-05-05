import bodyParser from 'body-parser';
import cors from 'cors';
import { Express } from 'express';
import { GraphQLSchema } from 'graphql';
import { OpenAPI } from 'sofa-api';
import swaggerUi from 'swagger-ui-express';
import { createSofaMiddleware } from './middlewares';

export interface AppConfig {
  schema: GraphQLSchema;
  openApi: ReturnType<typeof OpenAPI>;
  basePath?: string;
  docsPath?: string;
}

export const initApp = (app: Express, config: AppConfig): void => {
  const { schema, openApi, basePath = '/api', docsPath = '/api-docs' } = config;
  app.use(cors({ origin: '*' }));
  // app.use(env === 'test' ? testJwt : authMiddleware);
  const restMiddleware = createSofaMiddleware(schema, openApi, basePath);
  app.use(bodyParser.json());
  app.use(basePath, restMiddleware);
  app.use(docsPath, swaggerUi.serve, (...args) => swaggerUi.setup(openApi.get())(...args));
};
