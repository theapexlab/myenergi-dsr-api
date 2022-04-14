/* eslint-disable class-methods-use-this */
import { FieldResolver, Resolver, Root } from 'type-graphql';
import { DeviceStatus } from './deviceStatus.type';

@Resolver(DeviceStatus)
export class DeviceStatusResolver {
  @FieldResolver()
  isAvailable(@Root() _deviceStatus: DeviceStatus): boolean {
    //  todo: implement custom logic to determine this flag (eg.: customer opt-in/out)
    return true;
  }
}
