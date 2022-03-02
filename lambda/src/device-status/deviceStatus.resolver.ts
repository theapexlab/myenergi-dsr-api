import { Context } from '../context';
import { Resolver, Root, Query, Arg, Ctx, ID, FieldResolver } from 'type-graphql';
import { DeviceStatus } from './deviceStatus.type';

@Resolver(DeviceStatus)
export class DeviceStatusResolver {
  @FieldResolver()
  isAvailable(@Root() deviceStatus: DeviceStatus): boolean {
    //  todo: implement custom logic to determine this flag (eg.: customer opt-in/out)
    return true;
  }

  @Query(() => DeviceStatus)
  deviceStatus(@Ctx() ctx: Context, @Arg('id', () => ID) id: number): Promise<DeviceStatus> {
    return ctx.dataSources.deviceApi.getDeviceStatus(id);
  }
}
