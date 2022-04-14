import { ContextFunction } from 'apollo-server-core';
import { ExpressContext } from 'apollo-server-express';
import { RoleType } from './auth/auth-checker';
import { AppDataSources, getAPIs } from './data-sources';

type SuperAdminUser = {
  role: RoleType.SUPERADMIN;
};

type AggregatorUser = {
  role: RoleType.AGGREGATOR;
  aggregatorId: string;
};

type AnonymousUser = {
  role: RoleType.ANONYMOUS;
};

export type AppUser = SuperAdminUser | AggregatorUser | AnonymousUser;
export interface AppContext {
  dataSources: AppDataSources;
  user: AppUser;
}

type AdminCredentials = {
  user: string;
  password: string;
};

type AggregatorCredentials = {
  client_id: string;
};

const isSuperadmin = (user: AppUser): user is SuperAdminUser => {
  return user.role === RoleType.SUPERADMIN;
};
const isAggregator = (user: AppUser): user is AggregatorUser => {
  return user.role === RoleType.AGGREGATOR;
};

export const getAggregatorCondition = <T>(
  user: AppUser,
  aggregatorConditionFactory: (aggregatorId: string) => T,
  adminConditionFactory: () => T | null = () => null
): T | null => {
  if (isSuperadmin(user)) {
    return adminConditionFactory();
  }
  if (isAggregator(user)) {
    return aggregatorConditionFactory(user.aggregatorId);
  }
  return null;
};

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
