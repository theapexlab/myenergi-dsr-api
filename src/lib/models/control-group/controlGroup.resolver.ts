/* eslint-disable class-methods-use-this */
import { Arg, Args, Authorized, Ctx, Int, Mutation, Query, Resolver } from 'type-graphql';
import { AppContext, RoleType } from '../../auth/auth.type';
import { DeviceHistory } from '../device-history';
import { DeviceStatus } from '../device-status';
import { Device } from '../device/device.type';
import { AffectedResponse, PaginationArgs } from '../shared';
import { mapSerialNo } from '../../utils';
import { getDataSources } from '../../utils/getDataSources';
import {
  ControlGroupHistoryArgs,
  ControlGroupsArgs,
  CreateControlGroupArgs,
  MutateControlGroupArgs,
} from './controlGroup.args';
import { ControlGroup } from './controlGroup.type';

@Resolver(ControlGroup)
export class ControlGroupResolver {
  @Authorized<RoleType>(RoleType.SUPERADMIN, RoleType.AGGREGATOR)
  @Query(() => [ControlGroup])
  controlGroups(@Ctx() ctx: AppContext, @Args() args: PaginationArgs): Promise<ControlGroup[]> {
    const { controlGroupApi } = getDataSources(ctx);
    return controlGroupApi.getControlGroups(args);
  }

  @Authorized<RoleType>(RoleType.SUPERADMIN, RoleType.AGGREGATOR)
  @Query(() => ControlGroup)
  async controlGroup(@Ctx() ctx: AppContext, @Arg('id', () => Int) id: number): Promise<ControlGroup> {
    const { controlGroupApi } = getDataSources(ctx);
    const controlGroup = await controlGroupApi.getControlGroupById(id);
    return controlGroup;
  }

  @Authorized<RoleType>(RoleType.SUPERADMIN, RoleType.AGGREGATOR)
  @Query(() => [Device])
  controlGroupDevices(@Ctx() ctx: AppContext, @Arg('id', () => Int) id: number): Promise<Device[]> {
    const { deviceApi } = getDataSources(ctx);
    return deviceApi.getControlGroupDevices(id);
  }

  @Authorized<RoleType>(RoleType.SUPERADMIN, RoleType.AGGREGATOR)
  @Query(() => [DeviceStatus])
  controlGroupStatus(@Ctx() ctx: AppContext, @Args() args: ControlGroupsArgs): Promise<DeviceStatus[]> {
    const { statusApi } = getDataSources(ctx);
    return statusApi.getControlGroupStatus(args);
  }

  @Authorized<RoleType>(RoleType.SUPERADMIN, RoleType.AGGREGATOR)
  @Query(() => [DeviceHistory])
  async controlGroupHistory(@Ctx() ctx: AppContext, @Args() args: ControlGroupHistoryArgs): Promise<DeviceHistory[]> {
    const { id, ...rest } = args;
    const { deviceApi, historyApi } = getDataSources(ctx);
    const devices = await deviceApi.getControlGroupDevices(id);
    return historyApi.getHistoryByIds(rest, devices.map(mapSerialNo));
  }

  @Authorized<RoleType>(RoleType.AGGREGATOR)
  @Mutation(() => ControlGroup)
  async createControlGroup(@Ctx() ctx: AppContext, @Args() args: CreateControlGroupArgs): Promise<ControlGroup> {
    const { name } = args;
    const { controlGroupApi, adminGroupApi } = getDataSources(ctx);
    const [adminGroup] = await adminGroupApi.getAll();
    return controlGroupApi.createControlGroup(name, adminGroup.id);
  }

  @Authorized<RoleType>(RoleType.AGGREGATOR)
  @Mutation(() => AffectedResponse)
  addDeviceToControlGroup(@Ctx() ctx: AppContext, @Args() args: MutateControlGroupArgs): Promise<AffectedResponse> {
    const { controlGroupApi } = getDataSources(ctx);
    return controlGroupApi.addDevice(args);
  }

  @Authorized<RoleType>(RoleType.AGGREGATOR)
  @Mutation(() => AffectedResponse)
  removeDeviceFromControlGroup(
    @Ctx() ctx: AppContext,
    @Args() args: MutateControlGroupArgs
  ): Promise<AffectedResponse> {
    const { controlGroupApi } = getDataSources(ctx);
    return controlGroupApi.removeDeviceFromControlGroup(args);
  }
}
