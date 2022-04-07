import { AuthChecker } from 'type-graphql';
import { AppContext } from '../context';

export enum RoleType {
  SUPERADMIN = 'SUPERADMIN',
  AGGREGATOR = 'AGGREGATOR',
}

export const authChecker: AuthChecker<AppContext, RoleType> = (resolverData, roles) => {
  const { context } = resolverData;
  const { isAdmin, appClientId } = context;

  if (roles.includes(RoleType.AGGREGATOR)) {
    return !!appClientId;
  }

  if (roles.includes(RoleType.SUPERADMIN)) {
    return isAdmin;
  }

  return roles.length === 0;
};
