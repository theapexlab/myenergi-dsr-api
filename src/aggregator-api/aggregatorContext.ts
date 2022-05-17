import { ExpressContext } from 'apollo-server-express';
import { AppContext, RoleType } from '../lib/auth/auth.type';
import { getContextUser, isTestEnv } from '../lib/utils/helpers';
import { ContextFunction } from 'apollo-server-core';
import { getAPIs } from '../lib/data-sources';
import { getTestContext } from '../lib/utils/testContext';
import { jwtService } from '../lib/services/jwtService';

export const getAggregatorContext: ContextFunction<ExpressContext, Omit<AppContext, 'dataSources'>> = async ({
  req,
}) => {
  const [, token] = req.headers.authorization?.split(' ') ?? [];
  const aggregatorId = await jwtService.verifyCognitoToken(token);

  if (!aggregatorId) return getContextUser(RoleType.ANONYMOUS);

  return getContextUser(RoleType.AGGREGATOR, aggregatorId);
};

export const getAggregatorRestContext = async (contextValue: ExpressContext): Promise<AppContext> => {
  const context = isTestEnv
    ? (getTestContext(contextValue) as AppContext)
    : ((await getAggregatorContext(contextValue)) as AppContext);
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
