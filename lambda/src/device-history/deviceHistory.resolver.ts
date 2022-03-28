/* eslint-disable class-methods-use-this */
import { Args, Ctx, Query, Resolver } from 'type-graphql';
import { AppContext } from '../context';
import { getApi } from '../data-sources';
import { DeviceHistoryArgs } from './deviceHistory.args';
import { DeviceHistory } from './deviceHistory.type';

@Resolver(DeviceHistory)
export class DeviceHistoryResolver {
  // todo: add arg to filter hours / days
  @Query(() => [DeviceHistory])
  deviceHistory(@Ctx() ctx: AppContext, @Args() args: DeviceHistoryArgs): Promise<DeviceHistory[]> {
    const historyApi = getApi('historyApi', ctx);
    return historyApi.getDeviceHistory(args);
  }
}
