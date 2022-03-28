/* eslint-disable class-methods-use-this */
import { GraphQLError } from 'graphql';
import { Arg, Args, Ctx, Int, Mutation, Query, Resolver } from 'type-graphql';
import { AppContext } from '../context';
import { getApi } from '../data-sources';
import { Device } from '../device';
import { DeviceHistory } from '../device-history';
import { DeviceStatus } from '../device-status';
import { AffectedResponse } from '../shared';
import { ControlGroupsArgs, CreateControlGroupArgs, MutateControlGroupArgs } from './controlGroup.args';
import { ControlGroup } from './controlGroup.type';

@Resolver(ControlGroup)
export class ControlGroupResolver {
  @Query(() => [ControlGroup])
  controlGroups(@Ctx() ctx: AppContext, @Args() args: ControlGroupsArgs): Promise<ControlGroup[]> {
    const controlGroupApi = getApi('controlGroupApi', ctx);
    return controlGroupApi.getControlGroups(args);
  }

  @Query(() => ControlGroup)
  async controlGroup(@Ctx() ctx: AppContext, @Arg('id', () => Int) id: number): Promise<ControlGroup> {
    const controlGroupApi = getApi('controlGroupApi', ctx);
    const result = await controlGroupApi.getControlGroupById(id);
    if (result === null) {
      throw new GraphQLError('Not found');
    }
    return result;
  }

  @Query(() => [Device])
  controlGroupDevices(@Ctx() ctx: AppContext, @Arg('id', () => Int) id: number): Promise<Device[]> {
    const controlGroupApi = getApi('controlGroupApi', ctx);
    return controlGroupApi.getControlGroupDevices(id);
  }

  @Query(() => [Device])
  controlGroupStatus(@Ctx() ctx: AppContext, @Arg('id', () => Int) id: number): Promise<DeviceStatus[]> {
    const controlGroupApi = getApi('controlGroupApi', ctx);
    return controlGroupApi.getControlGroupStatus(id);
  }

  @Query(() => [Device])
  controlGroupHistory(@Ctx() ctx: AppContext, @Arg('id', () => Int) id: number): Promise<DeviceHistory[]> {
    const controlGroupApi = getApi('controlGroupApi', ctx);
    return controlGroupApi.getControlGroupHistory(id);
  }

  @Mutation(() => ControlGroup)
  createControlGroup(@Ctx() ctx: AppContext, @Args() args: CreateControlGroupArgs): Promise<ControlGroup> {
    const { name, adminGroupId } = args;
    const controlGroupApi = getApi('controlGroupApi', ctx);
    return controlGroupApi.createControlGroup(name, adminGroupId);
  }

  @Mutation(() => AffectedResponse)
  addDeviceToControlGroup(@Ctx() ctx: AppContext, @Args() args: MutateControlGroupArgs): Promise<AffectedResponse> {
    const controlGroupApi = getApi('controlGroupApi', ctx);
    return controlGroupApi.addDevice(args);
  }

  @Mutation(() => AffectedResponse)
  removeDeviceFromControlGroup(
    @Ctx() ctx: AppContext,
    @Args() args: MutateControlGroupArgs
  ): Promise<AffectedResponse> {
    const controlGroupApi = getApi('controlGroupApi', ctx);
    return controlGroupApi.removeDevice(args);
  }
}
