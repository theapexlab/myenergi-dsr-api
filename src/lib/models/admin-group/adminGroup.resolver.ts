/* eslint-disable class-methods-use-this */
import { Arg, Args, Authorized, Ctx, Int, Mutation, Query, Resolver } from 'type-graphql';
import { AppContext, RoleType } from '../../auth/auth.type';
import { Device } from '../device';
import { DeviceHistory } from '../device-history';
import { DeviceStatus } from '../device-status';
import { AffectedResponse } from '../shared';
import { mapSerialNo } from '../../utils';
import { getDataSources } from '../../utils/getDataSources';
import { AdminGroupDevicesArgs, AdminGroupHistoryArgs, AdminGroupsArgs, MutateAdminGroupArgs } from './adminGroup.args';
import { AdminGroup } from './adminGroup.type';

@Resolver(AdminGroup)
export class AdminGroupResolver {
  /* Queries */

  @Authorized<RoleType>(RoleType.SUPERADMIN, RoleType.AGGREGATOR)
  @Query(() => [AdminGroup])
  adminGroups(@Ctx() ctx: AppContext, @Args() args: AdminGroupsArgs): Promise<AdminGroup[]> {
    const { adminGroupApi } = getDataSources(ctx);
    return adminGroupApi.getAll(args);
  }

  @Authorized<RoleType>(RoleType.SUPERADMIN, RoleType.AGGREGATOR)
  @Query(() => AdminGroup)
  adminGroup(@Ctx() ctx: AppContext, @Arg('id', () => Int) id: number): Promise<AdminGroup> {
    const { adminGroupApi } = getDataSources(ctx);

    return adminGroupApi.getById(id);
  }

  /* Relation queries */

  @Authorized<RoleType>(RoleType.SUPERADMIN, RoleType.AGGREGATOR)
  @Query(() => [Device])
  adminGroupDevices(@Ctx() ctx: AppContext, @Args() args: AdminGroupDevicesArgs): Promise<Device[]> {
    const { deviceApi } = getDataSources(ctx);
    return deviceApi.getAll(args);
  }

  @Authorized<RoleType>(RoleType.SUPERADMIN, RoleType.AGGREGATOR)
  @Query(() => [DeviceStatus])
  adminGroupStatus(@Ctx() ctx: AppContext, @Arg('id', () => Int) id: number): Promise<DeviceStatus[]> {
    const { statusApi } = getDataSources(ctx);
    return statusApi.getAdminGroupStatus(id);
  }

  @Authorized<RoleType>(RoleType.SUPERADMIN, RoleType.AGGREGATOR)
  @Query(() => [DeviceHistory])
  async adminGroupHistory(@Ctx() ctx: AppContext, @Args() args: AdminGroupHistoryArgs): Promise<DeviceHistory[]> {
    const { id, ...rest } = args;
    const { deviceApi, historyApi } = getDataSources(ctx);
    const devices = await deviceApi.getAll({ id });
    return historyApi.getHistoryByIds(rest, devices.map(mapSerialNo));
  }
}

@Resolver()
export class SuperAdminGroupResolver {
  @Authorized<RoleType>(RoleType.SUPERADMIN)
  @Mutation(() => AdminGroup)
  createAdminGroup(
    @Ctx() ctx: AppContext,
    @Arg('name') name: string,
    @Arg('aggregatorId') aggregatorId: string
  ): Promise<AdminGroup> {
    const { adminGroupApi } = getDataSources(ctx);
    return adminGroupApi.create(name, aggregatorId);
  }

  @Authorized<RoleType>(RoleType.SUPERADMIN)
  @Mutation(() => AffectedResponse)
  addDeviceToAdminGroup(@Ctx() ctx: AppContext, @Args() args: MutateAdminGroupArgs): Promise<AffectedResponse> {
    const { adminGroupApi } = getDataSources(ctx);
    return adminGroupApi.addDevices(args);
  }

  @Authorized<RoleType>(RoleType.SUPERADMIN)
  @Mutation(() => AffectedResponse)
  removeDeviceFromAdminGroup(@Ctx() ctx: AppContext, @Args() args: MutateAdminGroupArgs): Promise<AffectedResponse> {
    const { adminGroupApi } = getDataSources(ctx);
    return adminGroupApi.removeDevices(args);
  }
}
