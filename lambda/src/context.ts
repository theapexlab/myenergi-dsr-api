import { ContextFunction } from 'apollo-server-core';
import { ExpressContext } from 'apollo-server-express';
import { AdminCredentials, AggregatorCredentials, AppContext, RoleType } from './auth/auth.type';
import { getAPIs } from './data-sources';

export const getContext: ContextFunction<ExpressContext, Omit<AppContext, 'dataSources'>> = async ({ req }) => {
  const admin: AdminCredentials | undefined = req['auth'];
  const aggregator: AggregatorCredentials | undefined = req['user'];
  if (!admin && !aggregator) {
    return {
      user: {
        role: RoleType.ANONYMOUS,
      },
    };
  }

  return {
    user: {
      role: admin ? RoleType.SUPERADMIN : RoleType.AGGREGATOR,
      aggregatorId: admin ? undefined : aggregator?.client_id,
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
