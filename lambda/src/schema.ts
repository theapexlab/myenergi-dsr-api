import { buildSchemaSync } from 'type-graphql';
import { DeviceResolver } from './device';
import { DeviceStatusResolver } from './device-status';
import { ControlGroupResolver } from './control-group';

const schema = buildSchemaSync({
  resolvers: [DeviceResolver, DeviceStatusResolver, ControlGroupResolver],
});

export { schema };
