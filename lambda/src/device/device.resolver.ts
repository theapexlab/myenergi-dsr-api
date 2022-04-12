/* eslint-disable class-methods-use-this */
import { Arg, Args, Authorized, Ctx, Int, Query, Resolver } from 'type-graphql';
import { RoleType } from '../auth/auth-checker';
import { AppContext } from '../context';
import { ControlGroup } from '../control-group';
import { getDataSources } from '../data-sources';
import { IdArgs, PaginationArgs } from '../shared';
import { Device } from './device.type';

@Resolver(Device)
export class DeviceResolver {
  @Authorized<RoleType>(RoleType.SUPERADMIN, RoleType.AGGREGATOR)
  @Query(() => [Device])
  devices(@Ctx() ctx: AppContext, @Args() args: PaginationArgs): Promise<Device[]> {
    const { deviceApi } = getDataSources(ctx);
    return deviceApi.getDevices(args, ctx.user);
  }

  @Authorized<RoleType>(RoleType.SUPERADMIN, RoleType.AGGREGATOR)
  @Query(() => Device)
  device(@Ctx() ctx: AppContext, @Args() { serialNo }: IdArgs): Promise<Device> {
    const { adminGroupApi } = getDataSources(ctx);
    return adminGroupApi.getDevice(serialNo, ctx.user);
  }

  @Authorized<RoleType>(RoleType.SUPERADMIN, RoleType.AGGREGATOR)
  @Query(() => [ControlGroup])
  deviceControlGroups(@Ctx() ctx: AppContext, @Arg('serialNo', () => Int) serialNo: number): Promise<ControlGroup[]> {
    const { deviceApi } = getDataSources(ctx);
    return deviceApi.getDeviceControlGroup(serialNo, ctx.user);
  }
}
