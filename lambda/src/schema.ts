import { buildSchemaSync } from 'type-graphql';
import { AdminGroupResolver, ControlGroupResolver, DeviceResolver, GroupStatusResolver } from './resolvers';

const schema = buildSchemaSync({
  resolvers: [AdminGroupResolver, DeviceResolver, ControlGroupResolver, GroupStatusResolver],
});

export { schema };
