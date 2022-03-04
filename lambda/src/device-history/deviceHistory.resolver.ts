import { Args, Ctx, Query, Resolver } from 'type-graphql';
import { AppContext } from '../context';
import { DeviceHistoryArgs } from './deviceHistory.args';
import { DeviceHistory } from './deviceHistory.type';

@Resolver(DeviceHistory)
export class DeviceHistoryResolver {
  // todo: add arg to filter hours / days
  @Query(() => [DeviceHistory])
  deviceHistory(@Ctx() ctx: AppContext, @Args() args: DeviceHistoryArgs): Promise<DeviceHistory[]> {
    const { dataSources } = ctx;
    return dataSources.historyApi.getDeviceHistory(args);
  }
}
