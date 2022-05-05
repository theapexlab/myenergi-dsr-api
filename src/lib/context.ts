import { ContextFunction } from 'apollo-server-core';
import { ExpressContext } from 'apollo-server-express';
import { TokenPayload, AppContext, RoleType } from './auth/auth.type';
import { getAPIs } from './data-sources';
import { Permission } from './services/jwtService';
import { logger } from './utils/logger';

export const getContext: ContextFunction<ExpressContext, Omit<AppContext, 'dataSources'>> = async ({ req }) => {
  const payload: TokenPayload | undefined = req?.['auth'];
  logger.info({ payload });
  if (!payload) {
    return {
      user: {
        role: RoleType.ANONYMOUS,
      },
    };
  }

  const isAdmin = payload.roles?.includes(Permission.aggregatorManagement);
  if (isAdmin) {
    return {
      user: {
        role: RoleType.SUPERADMIN,
      },
    };
  }

  return {
    user: {
      role: RoleType.AGGREGATOR,
      aggregatorId: payload.client_id,
    },
  };
};

export const getRestContext = async (contextValue: ExpressContext): Promise<AppContext> => {
  const context = (await getContext(contextValue)) as AppContext;
  const dataSources = getAPIs();
  const initializers: Array<void | Promise<void>> = [];
  for (const dataSource of Object.values(dataSources)) {
    if (dataSource.initialize) {
      initializers.push(
        dataSource.initialize({
          context,
          cache: {} as any,
        })
      );
    }
  }

  await Promise.all(initializers);
  context.dataSources = dataSources;
  return context;
};
