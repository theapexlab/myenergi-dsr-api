import { AuthChecker } from 'type-graphql';
import { AppContext } from '../context';

export enum RoleType {
  SUPERADMIN = 'SUPERADMIN',
  AGGREGATOR = 'AGGREGATOR',
  ANONYMOUS = 'ANONYMOUS',
}

export const authChecker: AuthChecker<AppContext, RoleType> = (resolverData, roles) => {
  const { context } = resolverData;
  const {
    user: { role },
  } = context;
  switch (role) {
    case RoleType.SUPERADMIN:
      return roles.includes(RoleType.SUPERADMIN);
    case RoleType.AGGREGATOR:
      return roles.includes(RoleType.AGGREGATOR);
    case RoleType.ANONYMOUS:
      return roles.includes(RoleType.ANONYMOUS) ?? roles.length === 0;
    default:
      return false;
  }
};
