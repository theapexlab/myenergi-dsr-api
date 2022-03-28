/* eslint-disable class-methods-use-this */
import { Arg, Args, Ctx, Int, Query, Resolver } from 'type-graphql';
import { AppContext } from '../context';
import { getApi } from '../data-sources';
import { IdArgs } from '../shared';
import { DevicesArgs } from './device.args';
import { Device } from './device.type';
import { ControlGroup } from '../control-group';

@Resolver(Device)
export class DeviceResolver {
  @Query(() => [Device])
  devices(@Ctx() ctx: AppContext, @Args() args: DevicesArgs): Promise<Device[]> {
    const deviceApi = getApi('deviceApi', ctx);
    return deviceApi.getDevices(args);
  }

  @Query(() => Device)
  device(@Ctx() ctx: AppContext, @Args() { serialNo }: IdArgs): Promise<Device> {
    const deviceApi = getApi('deviceApi', ctx);
    return deviceApi.getDevice(serialNo);
  }

  @Query(() => ControlGroup, { nullable: true })
  deviceControlGroup(
    @Ctx() ctx: AppContext,
    @Arg('serialNo', () => Int) serialNo: number
  ): Promise<ControlGroup | null> {
    const deviceApi = getApi('deviceApi', ctx);
    return deviceApi.getDeviceControlGroup(serialNo);
  }
}
