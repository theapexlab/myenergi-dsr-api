import { buildSchemaSync } from 'type-graphql';
import { authChecker } from '../lib/auth/auth-checker';
import { AdminGroupResolver, SuperAdminGroupResolver } from '../lib/models/admin-group';
import { AppClientResolver } from '../lib/models/app-client';
import { LoginResolver } from '../lib/models/login';

export const schema = buildSchemaSync({
  resolvers: [AppClientResolver, AdminGroupResolver, SuperAdminGroupResolver, LoginResolver],
  authChecker,
});
