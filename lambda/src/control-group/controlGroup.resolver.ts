import { Arg, Args, Ctx, Int, Mutation, Query, Resolver } from 'type-graphql';
import { AppContext } from '../context';
import { ControlGroup } from './controlGroup.type';
import { MutateControlGroupArgs, ControlGroupsArgs } from './controlGroup.args';
import { GraphQLError } from 'graphql';
import { AffectedResponse } from '../shared';
import { Device } from '../device';

@Resolver(ControlGroup)
export class ControlGroupResolver {
  @Query(() => [ControlGroup])
  controlGroups(@Ctx() ctx: AppContext, @Args() args: ControlGroupsArgs): Promise<ControlGroup[]> {
    const {
      dataSources: { controlGroupApi },
    } = ctx;
    return controlGroupApi.getControlGroups(args);
  }

  @Query(() => ControlGroup)
  async controlGroup(@Ctx() ctx: AppContext, @Arg('id', () => Int) id: number): Promise<ControlGroup> {
    const {
      dataSources: { controlGroupApi },
    } = ctx;
    const result = await controlGroupApi.getControlGroupById(id);
    if (result === null) {
      throw new GraphQLError('Not found');
    }
    return result;
  }

  @Query(() => [Device])
  controlGroupDevices(@Ctx() ctx: AppContext, @Arg('id', () => Int) id: number): Promise<Device[]> {
    const {
      dataSources: { controlGroupApi },
    } = ctx;
    return controlGroupApi.getControlGroupDevices(id);
  }

  @Mutation(() => ControlGroup)
  createControlGroup(@Ctx() ctx: AppContext, @Arg('name') name: string): Promise<ControlGroup> {
    const {
      dataSources: { controlGroupApi },
    } = ctx;
    return controlGroupApi.createControlGroup(name);
  }

  @Mutation(() => AffectedResponse)
  addDeviceToControlGroup(@Ctx() ctx: AppContext, @Args() args: MutateControlGroupArgs): Promise<AffectedResponse> {
    const {
      dataSources: { controlGroupApi },
    } = ctx;
    return controlGroupApi.addDevice(args);
  }

  @Mutation(() => AffectedResponse)
  removeDeviceFromControlGroup(
    @Ctx() ctx: AppContext,
    @Args() args: MutateControlGroupArgs
  ): Promise<AffectedResponse> {
    const {
      dataSources: { controlGroupApi },
    } = ctx;
    return controlGroupApi.removeDevice(args);
  }
}
