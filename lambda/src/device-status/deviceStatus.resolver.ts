/* eslint-disable class-methods-use-this */
import { Args, Authorized, Ctx, FieldResolver, Query, Resolver, Root } from 'type-graphql';
import { RoleType } from '../auth/auth-checker';
import { AppContext } from '../context';
import { getDataSources } from '../data-sources';
import { IdArgs } from '../shared';
import { DeviceStatus } from './deviceStatus.type';

@Resolver(DeviceStatus)
export class DeviceStatusResolver {
  @FieldResolver()
  isAvailable(@Root() _deviceStatus: DeviceStatus): boolean {
    //  todo: implement custom logic to determine this flag (eg.: customer opt-in/out)
    return true;
  }

  @Authorized<RoleType>(RoleType.SUPERADMIN, RoleType.AGGREGATOR)
  @Query(() => DeviceStatus)
  deviceStatus(@Ctx() ctx: AppContext, @Args() { serialNo }: IdArgs): Promise<DeviceStatus> {
    const { deviceApi } = getDataSources(ctx);
    return deviceApi.getDeviceStatus(serialNo);
  }
}
