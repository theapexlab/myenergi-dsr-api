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
    // todo: get adminGroupId from context
    const adminGroupId = 1;
    return deviceApi.getAdminGroupDevices(args, adminGroupId);
  }

  @Query(() => Device)
  device(@Ctx() ctx: AppContext, @Args() { serialNo }: IdArgs): Promise<Device> {
    const { deviceApi } = getDataSources(ctx);
    // todo: get adminGroupId from context
    const adminGroupId = 1;
    return deviceApi.getAdminGroupDevice(serialNo, adminGroupId);
  }

  @Query(() => [ControlGroup])
  deviceControlGroups(@Ctx() ctx: AppContext, @Arg('serialNo', () => Int) serialNo: number): Promise<ControlGroup[]> {
    const { deviceApi } = getDataSources(ctx);
    // todo: get adminGroupId from context
    const adminGroupId = 1;
    return deviceApi.getDeviceControlGroup(serialNo, adminGroupId);
  }
}
