import { Arg, Args, Ctx, ID, Query, Resolver } from 'type-graphql';
import { Context } from '../context';
import { DevicesArgs } from './device.args';
import { Device } from './device.type';

@Resolver(Device)
export class DeviceResolver {
  @Query(() => [Device])
  devices(@Ctx() ctx: Context, @Args() args: DevicesArgs): Promise<Device[]> {
    return ctx.dataSources.deviceApi.getDevices(args);
  }

  @Query(() => Device)
  async device(@Ctx() ctx: Context, @Arg('id', () => ID) id: string) {
    return ctx.dataSources.deviceApi.getDevice(id);
  }
}
