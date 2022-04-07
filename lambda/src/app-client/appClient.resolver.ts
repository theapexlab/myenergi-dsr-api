/* eslint-disable class-methods-use-this */
import { Arg, Authorized, Ctx, Mutation, Query, Resolver } from 'type-graphql';
import { RoleType } from '../auth/auth-checker';
import { AppContext } from '../context';
import { getDataSources } from '../data-sources';
import { AppClient, AppClientDetails, AppClientId } from './appClient.type';

@Resolver()
export class AppClientResolver {
  @Authorized<RoleType>(RoleType.SUPERADMIN)
  @Query(() => [AppClient])
  appClients(@Ctx() ctx: AppContext): Promise<AppClient[]> {
    const { appClientApi } = getDataSources(ctx);
    return appClientApi.list();
  }

  @Authorized<RoleType>(RoleType.SUPERADMIN)
  @Mutation(() => AppClientDetails)
  async createAppClient(@Ctx() ctx: AppContext, @Arg('name') name: string): Promise<AppClientDetails> {
    const { appClientApi, adminGroupApi } = getDataSources(ctx);
    const appClient = await appClientApi.create(name);
    await adminGroupApi.create(name, appClient.clientId);
    return appClient;
  }

  @Authorized<RoleType>(RoleType.SUPERADMIN)
  @Mutation(() => AppClientId)
  async removeAppClient(@Ctx() ctx: AppContext, @Arg('id') id: string): Promise<AppClientId> {
    const { appClientApi, adminGroupApi } = getDataSources(ctx);
    await adminGroupApi.removeByAggregatorId(id);
    return appClientApi.remove(id);
  }
}
