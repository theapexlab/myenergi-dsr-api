import { ExpressContext } from 'apollo-server-express';
import { AppContext, RoleType } from '../auth/auth.type';
import { CustomJwtPayload, Permission } from '../services/jwtService';
import { verify } from 'jsonwebtoken';
import { getContextUser } from './helpers';
import { ContextFunction } from 'apollo-server-core';

interface TestJwtPayload extends CustomJwtPayload {
  client_id?: string;
}

export const getTestContext: ContextFunction<ExpressContext, Omit<AppContext, 'dataSources'>> = ({ req }) => {
  const [, token] = req.headers.authorization?.split(' ') ?? [];

  if (!token) return getContextUser(RoleType.ANONYMOUS);

  const payload = verify(token, 'test') as TestJwtPayload;
  const isAdmin = payload.roles?.includes(Permission.aggregatorManagement);

  if (isAdmin) {
    return getContextUser(RoleType.SUPERADMIN);
  }
  const { client_id } = payload ?? {};
  if (client_id) {
    return getContextUser(RoleType.AGGREGATOR, client_id);
  }

  return getContextUser(RoleType.ANONYMOUS);
};
