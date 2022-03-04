import { Args, Ctx, FieldResolver, Query, Resolver, Root } from 'type-graphql';
import { AppContext } from '../context';
import { IdArgs } from '../shared';
import { DeviceStatus } from './deviceStatus.type';

@Resolver(DeviceStatus)
export class DeviceStatusResolver {
  @FieldResolver()
  isAvailable(@Root() deviceStatus: DeviceStatus): boolean {
    //  todo: implement custom logic to determine this flag (eg.: customer opt-in/out)
    return true;
  }

  @Query(() => DeviceStatus)
  deviceStatus(@Ctx() ctx: AppContext, @Args() { serialNo }: IdArgs): Promise<DeviceStatus> {
    return ctx.dataSources.deviceApi.getDeviceStatus(serialNo);
  }
}
