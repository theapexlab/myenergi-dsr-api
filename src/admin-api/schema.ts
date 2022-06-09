import { buildSchemaSync } from 'type-graphql';
import { authChecker } from '../lib/auth/auth-checker';
import {
  AdminGroupControlGroupsResolver,
  AdminGroupCreateResolver,
  AdminGroupDevicesResolver,
  AdminGroupResolver,
} from '../lib/models/admin-group';
import { AppClientResolver } from '../lib/models/app-client';
import { ControlGroupResolver } from '../lib/models/control-group';
import { DeviceResolver } from '../lib/models/device';
import { LoginResolver } from '../lib/models/login';
import { DeviceStatusResolver } from '../lib/models/device-status';

export const schema = buildSchemaSync({
  resolvers: [
    AppClientResolver,
    AdminGroupResolver,
    AdminGroupCreateResolver,
    AdminGroupDevicesResolver,
    AdminGroupControlGroupsResolver,
    LoginResolver,
    ControlGroupResolver,
    DeviceResolver,
    DeviceStatusResolver,
  ],
  authChecker,
});
