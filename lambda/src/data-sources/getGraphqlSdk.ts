import { GraphQLClient } from 'graphql-request';
import { getSdk } from '../generated/graphql';

export const getGraphqlSdk = ({ baseURL, secret }): ReturnType<typeof getSdk> => {
  const client = new GraphQLClient(baseURL, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'x-hasura-admin-secret': secret,
    },
  });
  return getSdk(client);
};
