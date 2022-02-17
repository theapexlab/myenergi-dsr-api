import { ApolloServer } from 'apollo-server-lambda';
import 'reflect-metadata';
import swaggerUi from 'swagger-ui-express';
import { DeviceAPI } from './dataSources';
import { app } from './rest-api';
import { schema } from './schema';
import swaggerDocument from './swagger.json';

const server = new ApolloServer({
  schema,
  dataSources() {
    return {
      deviceApi: new DeviceAPI(),
    };
  },
});
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

export const handler = server.createHandler({
  expressAppFromMiddleware(middleware) {
    app.use(middleware);
    return app;
  },
});
