/* eslint-disable class-methods-use-this */
import { Arg, Args, Ctx, Int, Mutation, Query, Resolver } from 'type-graphql';
import { AppContext } from '../context';
import { getApi } from '../data-sources';
import { Device } from '../device';
import { DeviceStatus } from '../device-status';
import { AffectedResponse } from '../shared';
import { AdminGroupsArgs, MutateAdminGroupArgs } from './adminGroup.args';
import { AdminGroup } from './adminGroup.type';

@Resolver(AdminGroup)
export class AdminGroupResolver {
  @Query(() => [AdminGroup])
  adminGroups(@Ctx() ctx: AppContext, @Args() args: AdminGroupsArgs): Promise<AdminGroup[]> {
    const adminGroupApi = getApi('adminGroupApi', ctx);
    return adminGroupApi.getAll(args);
  }

  @Query(() => AdminGroup)
  adminGroup(@Ctx() ctx: AppContext, @Arg('id', () => Int) id: number): Promise<AdminGroup> {
    const adminGroupApi = getApi('adminGroupApi', ctx);
    return adminGroupApi.getById(id);
  }

  @Query(() => [Device])
  adminGroupDevices(@Ctx() ctx: AppContext, @Arg('id', () => Int) id: number): Promise<Device[]> {
    const adminGroupApi = getApi('adminGroupApi', ctx);
    return adminGroupApi.getDevices(id);
  }

  @Query(() => [DeviceStatus])
  adminGroupStatus(@Ctx() ctx: AppContext, @Arg('id', () => Int) id: number): Promise<DeviceStatus[]> {
    const adminGroupApi = getApi('adminGroupApi', ctx);
    return adminGroupApi.getStatus(id);
  }

  @Mutation(() => AdminGroup)
  createAdminGroup(@Ctx() ctx: AppContext, @Arg('name') name: string): Promise<AdminGroup> {
    const adminGroupApi = getApi('adminGroupApi', ctx);
    return adminGroupApi.create(name);
  }

  @Mutation(() => AffectedResponse)
  addDeviceToAdminGroup(@Ctx() ctx: AppContext, @Args() args: MutateAdminGroupArgs): Promise<AffectedResponse> {
    const adminGroupApi = getApi('adminGroupApi', ctx);
    return adminGroupApi.addDevices(args);
  }

  @Mutation(() => AffectedResponse)
  removeDeviceFromAdminGroup(@Ctx() ctx: AppContext, @Args() args: MutateAdminGroupArgs): Promise<AffectedResponse> {
    const adminGroupApi = getApi('adminGroupApi', ctx);
    return adminGroupApi.removeDevices(args);
  }
}
