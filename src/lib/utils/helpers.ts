import { AppUser, RoleType } from '../auth/auth.type';
import { env, NodeEnv } from '../config';

export const isTestEnv = env === NodeEnv.TEST;

export const getContextUser = (role: RoleType, aggregatorId?: string): { user: AppUser } => {
  return {
    user: {
      role,
      aggregatorId: aggregatorId ?? undefined,
    },
  };
};
