import { ApolloServer } from 'apollo-server-lambda';
import { getContext } from '../lib/context';
import { getAPIs } from '../lib/data-sources';
import { schema } from './schema';

export const server = new ApolloServer({
  schema,
  context: ({ express }) => getContext(express),
  dataSources: getAPIs,
});
