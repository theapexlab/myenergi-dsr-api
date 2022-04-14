/* eslint-disable class-methods-use-this */
import { Arg, Args, Authorized, Ctx, FieldResolver, Int, Query, Resolver, Root } from 'type-graphql';
import { RoleType } from '../auth/auth-checker';
import { AppContext } from '../context';
import { ControlGroup } from '../control-group';
import { getDataSources } from '../data-sources';
import { DeviceHistory } from '../device-history';
import { DeviceHistoryArgs } from '../device-history/deviceHistory.args';
import { DeviceStatus } from '../device-status';
import { IdArgs, PaginationArgs } from '../shared';
import { Device } from './device.type';

@Resolver(Device)
export class DeviceResolver {
  @Authorized<RoleType>(RoleType.SUPERADMIN, RoleType.AGGREGATOR)
  @Query(() => [Device])
  devices(@Ctx() ctx: AppContext, @Args() args: PaginationArgs): Promise<Device[]> {
    const { deviceApi } = getDataSources(ctx);
    return deviceApi.getAll(args);
  }

  @Authorized<RoleType>(RoleType.SUPERADMIN, RoleType.AGGREGATOR)
  @Query(() => Device)
  device(@Ctx() ctx: AppContext, @Args() { serialNo }: IdArgs): Promise<Device> {
    const { deviceApi } = getDataSources(ctx);
    return deviceApi.getById(serialNo);
  }

  @Authorized<RoleType>(RoleType.SUPERADMIN, RoleType.AGGREGATOR)
  @Query(() => [ControlGroup])
  deviceControlGroups(@Ctx() ctx: AppContext, @Arg('serialNo', () => Int) serialNo: number): Promise<ControlGroup[]> {
    const { controlGroupApi } = getDataSources(ctx);
    return controlGroupApi.getDeviceControlGroup(serialNo);
  }

  @FieldResolver(() => String)
  postcode(@Ctx() ctx: AppContext, @Root() device: Device): Promise<string> {
    const { deviceApi } = getDataSources(ctx);
    return deviceApi.getDevicePostcode(device.serialNo);
  }

  @Authorized<RoleType>(RoleType.SUPERADMIN, RoleType.AGGREGATOR)
  @Query(() => [DeviceHistory])
  async deviceHistory(
    @Ctx() ctx: AppContext,
    @Args() { serialNo, ...dates }: DeviceHistoryArgs
  ): Promise<DeviceHistory[]> {
    const { historyApi, deviceApi } = getDataSources(ctx);
    const device = await deviceApi.getById(serialNo);
    return historyApi.getHistoryByIds(dates, [device.serialNo]);
  }

  @Authorized<RoleType>(RoleType.SUPERADMIN, RoleType.AGGREGATOR)
  @Query(() => DeviceStatus)
  deviceStatus(@Ctx() ctx: AppContext, @Args() { serialNo }: IdArgs): Promise<DeviceStatus> {
    const { statusApi } = getDataSources(ctx);

    return statusApi.getDeviceStatus(serialNo);
  }
}
