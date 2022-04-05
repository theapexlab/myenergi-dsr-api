/* eslint-disable class-methods-use-this */
import { Arg, Args, Ctx, Int, Query, Resolver } from 'type-graphql';
import { AppContext } from '../context';
import { ControlGroup } from '../control-group';
import { getDataSources } from '../data-sources';
import { IdArgs } from '../shared';
import { DevicesArgs } from './device.args';
import { Device } from './device.type';

@Resolver(Device)
export class DeviceResolver {
  @Query(() => [Device])
  devices(@Ctx() ctx: AppContext, @Args() args: DevicesArgs): Promise<Device[]> {
    const { deviceApi } = getDataSources(ctx);
    return deviceApi.getDevices(args);
  }

  @Query(() => Device)
  device(@Ctx() ctx: AppContext, @Args() { serialNo }: IdArgs): Promise<Device> {
    const { deviceApi } = getDataSources(ctx);
    return deviceApi.getDevice(serialNo);
  }

  // todo: consider if we need this
  @Query(() => ControlGroup, { nullable: true })
  deviceControlGroup(
    @Ctx() ctx: AppContext,
    @Arg('serialNo', () => Int) serialNo: number
  ): Promise<ControlGroup | null> {
    const { deviceApi } = getDataSources(ctx);
    return deviceApi.getDeviceControlGroup(serialNo);
  }
}
