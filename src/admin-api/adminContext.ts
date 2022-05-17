import { ExpressContext } from 'apollo-server-express';
import { verify } from 'jsonwebtoken';
import { UnauthorizedError } from 'type-graphql';
import { AppContext, RoleType } from '../lib/auth/auth.type';
import { customerApi } from '../lib/config';
import { Permission } from '../lib/services/jwtService';
import { getContextUser } from '../lib/utils/helpers';
import { ContextFunction } from 'apollo-server-core';

export const getAdminContext: ContextFunction<ExpressContext, Omit<AppContext, 'dataSources'>> = async ({ req }) => {
  const [, token] = req.headers.authorization?.split(' ') ?? [];
  const payload = verify(token, customerApi.jwtSecret) as { roles?: string[] };

  if (!payload) {
    throw new UnauthorizedError();
  }

  const isAdmin = payload.roles?.includes(Permission.aggregatorManagement);

  if (!isAdmin) return getContextUser(RoleType.ANONYMOUS);

  return getContextUser(RoleType.SUPERADMIN);
};
