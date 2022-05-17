import { ApolloServer } from 'apollo-server-lambda';
import { getAPIs } from '../lib/data-sources';
import { getAggregatorContext } from './aggregatorContext';
import { schema } from './schema';

export const server = new ApolloServer({
  schema,
  context: ({ express }) => getAggregatorContext(express),
  dataSources: getAPIs,
});
