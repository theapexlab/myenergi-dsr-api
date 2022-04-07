import { ContextFunction } from 'apollo-server-core';
import { ExpressContext } from 'apollo-server-express';
import { AppDataSources } from './data-sources';
import { logger } from './utils/logger';

export interface AppContext {
  dataSources: AppDataSources;
  isAdmin: boolean;
  appClientId?: string;
}

type AdminCredentials = {
  user: string;
  password: string;
};

type AggregatorCredentials = {
  client_id: string;
};

export const getContext: ContextFunction<ExpressContext, Omit<AppContext, 'dataSources'>> = async ({ req }) => {
  const admin: AdminCredentials | undefined = req['auth'];
  const aggregator: AggregatorCredentials | undefined = req['user'];
  try {
    return {
      appClientId: aggregator?.client_id,
      isAdmin: !!admin,
    };
  } catch (err) {
    logger.error(err.toString());
    return {
      isAdmin: false,
    };
  }
};
