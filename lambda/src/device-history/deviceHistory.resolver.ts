/* eslint-disable class-methods-use-this */
import { Args, Authorized, Ctx, Query, Resolver } from 'type-graphql';
import { RoleType } from '../auth/auth-checker';
import { AppContext } from '../context';
import { getDataSources } from '../data-sources';
import { DeviceHistoryArgs } from './deviceHistory.args';
import { DeviceHistory } from './deviceHistory.type';

@Resolver(DeviceHistory)
export class DeviceHistoryResolver {
  @Authorized<RoleType>(RoleType.SUPERADMIN, RoleType.AGGREGATOR)
  @Query(() => [DeviceHistory])
  async deviceHistory(
    @Ctx() ctx: AppContext,
    @Args() { serialNo, ...dates }: DeviceHistoryArgs
  ): Promise<DeviceHistory[]> {
    const { historyApi, adminGroupApi } = getDataSources(ctx);
    const device = await adminGroupApi.getDevice(serialNo, ctx.user);
    return historyApi.getHistoryByIds(dates, [device.serialNo]);
  }
}
