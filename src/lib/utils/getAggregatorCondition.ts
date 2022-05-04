import { AggregatorUser, AppUser, RoleType, SuperAdminUser } from '../auth/auth.type';

const isSuperadmin = (user: AppUser): user is SuperAdminUser => {
  return user.role === RoleType.SUPERADMIN;
};
const isAggregator = (user: AppUser): user is AggregatorUser => {
  return user.role === RoleType.AGGREGATOR;
};

export const getAggregatorCondition = <T>(
  user: AppUser,
  aggregatorConditionFactory: (aggregatorId: string) => T,
  adminConditionFactory: () => T | null = (): null => null
): T | null => {
  if (isSuperadmin(user)) {
    return adminConditionFactory();
  }
  if (isAggregator(user)) {
    return aggregatorConditionFactory(user.aggregatorId);
  }
  return null;
};
