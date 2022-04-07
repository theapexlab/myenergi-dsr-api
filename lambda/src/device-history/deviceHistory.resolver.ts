/* eslint-disable class-methods-use-this */
import { Args, Authorized, Ctx, Query, Resolver } from 'type-graphql';
import { RoleType } from '../auth/auth-checker';
import { AppContext } from '../context';
import { getDataSources } from '../data-sources';
import { DeviceHistoryArgs } from './deviceHistory.args';
import { DeviceHistory } from './deviceHistory.type';

@Resolver(DeviceHistory)
export class DeviceHistoryResolver {
  // todo: add arg to filter hours / days
  @Authorized<RoleType>(RoleType.SUPERADMIN, RoleType.AGGREGATOR)
  @Query(() => [DeviceHistory])
  deviceHistory(@Ctx() ctx: AppContext, @Args() args: DeviceHistoryArgs): Promise<DeviceHistory[]> {
    const { historyApi } = getDataSources(ctx);
    return historyApi.getDeviceHistory(args);
  }
}
