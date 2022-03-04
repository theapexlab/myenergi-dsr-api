import { Args, Ctx, Query, Resolver } from 'type-graphql';
import { AppContext } from '../context';
import { IdArgs } from '../shared';
import { DevicesArgs } from './device.args';
import { Device } from './device.type';

@Resolver(Device)
export class DeviceResolver {
  @Query(() => [Device])
  devices(@Ctx() ctx: AppContext, @Args() args: DevicesArgs): Promise<Device[]> {
    return ctx.dataSources.deviceApi.getDevices(args);
  }

  @Query(() => Device)
  device(@Ctx() ctx: AppContext, @Args() { serialNo }: IdArgs) {
    return ctx.dataSources.deviceApi.getDevice(serialNo);
  }
}
