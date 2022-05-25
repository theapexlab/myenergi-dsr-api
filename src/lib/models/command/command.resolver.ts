/* eslint-disable class-methods-use-this */
import { Args, Authorized, Ctx, Mutation, Resolver } from 'type-graphql';
import { AppContext, RoleType } from '../../auth/auth.type';
import { NotFoundError } from '../../data-sources/CustomError';
import { getDataSources } from '../../utils/getDataSources';
import { GroupArgs, IdArgs } from '../shared';
import {
  DeviceSetFrequencyCommandArgs,
  DevicesSetLoadCommandArgs,
  GroupSetFrequencyCommandArgs,
  GroupSetLoadCommandArgs,
  SetLoadCommandBaseArgs,
} from './command.args';
import { CommandResponse, SetLoad } from './command.type';

const clearLoadValues: SetLoadCommandBaseArgs = {
  csn: 1,
  value: 'nodsr',
  ttl: 1,
};

@Resolver()
export class CommandResolver {
  // Setload commands
  @Authorized<RoleType>(RoleType.SUPERADMIN, RoleType.AGGREGATOR)
  @Mutation(() => CommandResponse)
  async setDeviceLoad(@Ctx() ctx: AppContext, @Args() args: DevicesSetLoadCommandArgs): Promise<CommandResponse> {
    const { commandApi } = getDataSources(ctx);
    const { serialNo, ...setLoadArgs } = args;
    const deviceHubDetail = await commandApi.getHubDetails(serialNo);
    if (!deviceHubDetail) {
      throw new NotFoundError(`Hub with serialNo ${serialNo} not found`);
    }
    const { hub } = deviceHubDetail;
    const load: SetLoad = {
      deviceAddresses: [serialNo],
      ...setLoadArgs,
    };
    return await commandApi.sendLoadCommand({ hubDetails: hub, load });
  }

  @Authorized<RoleType>(RoleType.SUPERADMIN, RoleType.AGGREGATOR)
  @Mutation(() => [CommandResponse])
  async setControlGroupLoad(@Ctx() ctx: AppContext, @Args() args: GroupSetLoadCommandArgs): Promise<CommandResponse[]> {
    const { commandApi } = getDataSources(ctx);
    const { id: controlGroupIds, ...setLoadArgs } = args;
    const deviceHubDetails = await commandApi.getControlGroupHubDetails(controlGroupIds);
    if (!deviceHubDetails || !deviceHubDetails.length) {
      throw new NotFoundError(`Control group with id ${controlGroupIds} not found, or no hubs found`);
    }
    return await commandApi.setGroupLoad(deviceHubDetails, setLoadArgs);
  }

  @Authorized<RoleType>(RoleType.SUPERADMIN, RoleType.AGGREGATOR)
  @Mutation(() => [CommandResponse])
  async setAdminGroupLoad(@Ctx() ctx: AppContext, @Args() args: GroupSetLoadCommandArgs): Promise<CommandResponse[]> {
    const { commandApi } = getDataSources(ctx);
    const { id: adminGroupId, ...setLoadArgs } = args;
    const deviceHubDetails = await commandApi.getAdminGroupHubDetails(adminGroupId);
    if (!deviceHubDetails || !deviceHubDetails.length) {
      throw new NotFoundError(`Admin group with id ${adminGroupId} not found, or no hubs found`);
    }
    return await commandApi.setGroupLoad(deviceHubDetails, setLoadArgs);
  }

  // SetFrequencyResponse commands
  @Authorized<RoleType>(RoleType.SUPERADMIN, RoleType.AGGREGATOR)
  @Mutation(() => CommandResponse)
  async setDeviceFrequency(
    @Ctx() ctx: AppContext,
    @Args() args: DeviceSetFrequencyCommandArgs
  ): Promise<CommandResponse> {
    const { commandApi } = getDataSources(ctx);
    const { serialNo, ...setFrequencyArgs } = args;
    const deviceHubDetails = await commandApi.getHubDetails(serialNo);
    if (!deviceHubDetails) {
      throw new NotFoundError(`Device with serial No ${serialNo} not found, or no hubs found`);
    }
    const { hub } = deviceHubDetails;
    return await commandApi.sendFrequencyCommand(hub, setFrequencyArgs);
  }

  @Authorized<RoleType>(RoleType.SUPERADMIN, RoleType.AGGREGATOR)
  @Mutation(() => [CommandResponse])
  async setControlGroupFrequency(
    @Ctx() ctx: AppContext,
    @Args() args: GroupSetFrequencyCommandArgs
  ): Promise<CommandResponse[]> {
    const { commandApi } = getDataSources(ctx);
    const { id: controlGroupIds, ...setFrequencyArgs } = args;
    const deviceHubDetails = await commandApi.getControlGroupHubDetails(controlGroupIds);
    if (!deviceHubDetails || !deviceHubDetails.length) {
      throw new NotFoundError(`Control group with id ${controlGroupIds} not found, or no hubs found`);
    }
    return await commandApi.setGroupFrequencyResponse(deviceHubDetails, setFrequencyArgs);
  }

  @Authorized<RoleType>(RoleType.SUPERADMIN, RoleType.AGGREGATOR)
  @Mutation(() => [CommandResponse])
  async setAdminGroupFrequency(
    @Ctx() ctx: AppContext,
    @Args() args: GroupSetFrequencyCommandArgs
  ): Promise<CommandResponse[]> {
    const { commandApi } = getDataSources(ctx);
    const { id: adminGroupId, ...setFrequencyArgs } = args;
    const deviceHubDetails = await commandApi.getAdminGroupHubDetails(adminGroupId);
    if (!deviceHubDetails || !deviceHubDetails.length) {
      throw new NotFoundError(`Admin group with id ${adminGroupId} not found, or no hubs found`);
    }
    return await commandApi.setGroupFrequencyResponse(deviceHubDetails, setFrequencyArgs);
  }

  // Clear load commands
  @Authorized<RoleType>(RoleType.SUPERADMIN, RoleType.AGGREGATOR)
  @Mutation(() => CommandResponse)
  async clearDeviceLoad(@Ctx() ctx: AppContext, @Args() { serialNo }: IdArgs): Promise<CommandResponse> {
    const { commandApi } = getDataSources(ctx);
    const deviceHubDetail = await commandApi.getHubDetails(serialNo);
    if (!deviceHubDetail) {
      throw new NotFoundError(`Hub with serialNo ${serialNo} not found`);
    }
    const { hub } = deviceHubDetail;
    const load: SetLoad = {
      deviceAddresses: [serialNo],
      ...clearLoadValues,
    };
    return await commandApi.sendLoadCommand({ hubDetails: hub, load });
  }

  @Authorized<RoleType>(RoleType.SUPERADMIN, RoleType.AGGREGATOR)
  @Mutation(() => [CommandResponse])
  async clearControlGroupLoad(@Ctx() ctx: AppContext, @Args() { id }: GroupArgs): Promise<CommandResponse[]> {
    const { commandApi } = getDataSources(ctx);
    const deviceHubDetails = await commandApi.getControlGroupHubDetails(id);
    if (!deviceHubDetails || !deviceHubDetails.length) {
      throw new NotFoundError(`Control group with id ${id} not found, or no hubs found`);
    }
    return await commandApi.setGroupLoad(deviceHubDetails, clearLoadValues);
  }

  @Authorized<RoleType>(RoleType.SUPERADMIN, RoleType.AGGREGATOR)
  @Mutation(() => [CommandResponse])
  async clearAdminGroupLoad(@Ctx() ctx: AppContext, @Args() { id }: GroupArgs): Promise<CommandResponse[]> {
    const { commandApi } = getDataSources(ctx);
    const deviceHubDetails = await commandApi.getAdminGroupHubDetails(id);
    if (!deviceHubDetails || !deviceHubDetails.length) {
      throw new NotFoundError(`Admin group with id ${id} not found, or no hubs found`);
    }
    return await commandApi.setGroupLoad(deviceHubDetails, clearLoadValues);
  }
}
