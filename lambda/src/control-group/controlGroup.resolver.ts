/* eslint-disable class-methods-use-this */
import { GraphQLError } from 'graphql';
import { Arg, Args, Ctx, Int, Mutation, Query, Resolver } from 'type-graphql';
import { AppContext } from '../context';
import { getDataSources } from '../data-sources';
import { Device } from '../device';
import { DeviceHistory } from '../device-history';
import { DeviceStatus } from '../device-status';
import { AffectedResponse } from '../shared';
import { mapSerialNo } from '../utils';
import {
  ControlGroupHistoryArgs,
  ControlGroupsArgs,
  CreateControlGroupArgs,
  MutateControlGroupArgs,
} from './controlGroup.args';
import { ControlGroup } from './controlGroup.type';

@Resolver(ControlGroup)
export class ControlGroupResolver {
  @Query(() => [ControlGroup])
  controlGroups(@Ctx() ctx: AppContext, @Args() args: ControlGroupsArgs): Promise<ControlGroup[]> {
    const { controlGroupApi } = getDataSources(ctx);
    return controlGroupApi.getControlGroups(args);
  }

  @Query(() => ControlGroup)
  async controlGroup(@Ctx() ctx: AppContext, @Arg('id', () => Int) id: number): Promise<ControlGroup> {
    const { controlGroupApi } = getDataSources(ctx);
    const result = await controlGroupApi.getControlGroupById(id);
    if (result === null) {
      throw new GraphQLError('Not found');
    }
    return result;
  }

  @Query(() => [Device])
  controlGroupDevices(@Ctx() ctx: AppContext, @Arg('id', () => Int) id: number): Promise<Device[]> {
    const { controlGroupApi } = getDataSources(ctx);
    return controlGroupApi.getControlGroupDevices(id);
  }

  @Query(() => [DeviceStatus])
  controlGroupStatus(@Ctx() ctx: AppContext, @Arg('id', () => Int) id: number): Promise<DeviceStatus[]> {
    const { controlGroupApi } = getDataSources(ctx);
    return controlGroupApi.getControlGroupStatus(id);
  }

  @Query(() => [Device])
  async controlGroupHistory(@Ctx() ctx: AppContext, @Args() args: ControlGroupHistoryArgs): Promise<DeviceHistory[]> {
    const { id, ...rest } = args;
    const { controlGroupApi, historyApi } = getDataSources(ctx);
    const devices = await controlGroupApi.getControlGroupDevices(id);
    return historyApi.getHistoryByIds(rest, devices.map(mapSerialNo));
  }

  @Mutation(() => ControlGroup)
  createControlGroup(@Ctx() ctx: AppContext, @Args() args: CreateControlGroupArgs): Promise<ControlGroup> {
    const { name, adminGroupId } = args;
    const { controlGroupApi } = getDataSources(ctx);
    return controlGroupApi.createControlGroup(name, adminGroupId);
  }

  @Mutation(() => AffectedResponse)
  addDeviceToControlGroup(@Ctx() ctx: AppContext, @Args() args: MutateControlGroupArgs): Promise<AffectedResponse> {
    const { controlGroupApi } = getDataSources(ctx);
    return controlGroupApi.addDevice(args);
  }

  @Mutation(() => AffectedResponse)
  removeDeviceFromControlGroup(
    @Ctx() ctx: AppContext,
    @Args() args: MutateControlGroupArgs
  ): Promise<AffectedResponse> {
    const { controlGroupApi } = getDataSources(ctx);
    return controlGroupApi.removeDevice(args);
  }
}
