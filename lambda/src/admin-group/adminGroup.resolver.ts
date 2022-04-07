/* eslint-disable class-methods-use-this */
import { Arg, Args, Ctx, Int, Mutation, Query, Resolver } from 'type-graphql';
import { AppContext } from '../context';
import { getDataSources } from '../data-sources';
import { Device } from '../device';
import { DeviceHistory } from '../device-history';
import { DeviceStatus } from '../device-status';
import { AffectedResponse } from '../shared';
import { mapSerialNo } from '../utils';
import { AdminGroupHistoryArgs, AdminGroupsArgs, MutateAdminGroupArgs } from './adminGroup.args';
import { AdminGroup, AdminGroupDevicesArgs } from './adminGroup.type';

@Resolver(AdminGroup)
export class AdminGroupResolver {
  /* Queries */

  @Query(() => [AdminGroup])
  adminGroups(@Ctx() ctx: AppContext, @Args() args: AdminGroupsArgs): Promise<AdminGroup[]> {
    const { adminGroupApi } = getDataSources(ctx);
    return adminGroupApi.getAll(args);
  }

  @Query(() => AdminGroup)
  adminGroup(@Ctx() ctx: AppContext, @Arg('id', () => Int) id: number): Promise<AdminGroup> {
    const { adminGroupApi } = getDataSources(ctx);
    return adminGroupApi.getById(id);
  }

  /* Relation queries */

  @Query(() => [Device])
  adminGroupDevices(@Ctx() ctx: AppContext, @Args() args: AdminGroupDevicesArgs): Promise<Device[]> {
    const { adminGroupApi } = getDataSources(ctx);
    const { id, limit, offset } = args;
    // todo: get adminGroupId from context
    // const adminGroupId = 1;
    // if (id !== adminGroupId) {
    //   throw new GraphQLError('Invalid adminGroupId');
    // }
    return adminGroupApi.getDevices({ limit, offset }, id);
  }

  @Query(() => [DeviceStatus])
  adminGroupStatus(@Ctx() ctx: AppContext, @Arg('id', () => Int) id: number): Promise<DeviceStatus[]> {
    const { adminGroupApi } = getDataSources(ctx);
    return adminGroupApi.getStatus(id);
  }

  @Query(() => [DeviceHistory])
  async adminGroupHistory(@Ctx() ctx: AppContext, @Args() args: AdminGroupHistoryArgs): Promise<DeviceHistory[]> {
    const { id, ...rest } = args;
    const { adminGroupApi, historyApi } = getDataSources(ctx);
    const devices = await adminGroupApi.getDevices({}, id);
    return historyApi.getHistoryByIds(rest, devices.map(mapSerialNo));
  }

  @Mutation(() => AdminGroup)
  createAdminGroup(@Ctx() ctx: AppContext, @Arg('name') name: string): Promise<AdminGroup> {
    const { adminGroupApi } = getDataSources(ctx);
    return adminGroupApi.create(name);
  }

  @Mutation(() => AffectedResponse)
  addDeviceToAdminGroup(@Ctx() ctx: AppContext, @Args() args: MutateAdminGroupArgs): Promise<AffectedResponse> {
    const { adminGroupApi } = getDataSources(ctx);
    return adminGroupApi.addDevices(args);
  }

  @Mutation(() => AffectedResponse)
  removeDeviceFromAdminGroup(@Ctx() ctx: AppContext, @Args() args: MutateAdminGroupArgs): Promise<AffectedResponse> {
    const { adminGroupApi } = getDataSources(ctx);
    return adminGroupApi.removeDevices(args);
  }
}
