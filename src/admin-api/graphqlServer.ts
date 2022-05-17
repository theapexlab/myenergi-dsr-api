import { ApolloServer } from 'apollo-server-lambda';
import { getAPIs } from '../lib/data-sources';
import { getAdminContext } from './adminContext';
import { schema } from './schema';

export const server = new ApolloServer({
  schema,
  context: ({ express }) => getAdminContext(express),
  dataSources: getAPIs,
});
