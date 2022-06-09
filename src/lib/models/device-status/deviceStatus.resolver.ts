/* eslint-disable class-methods-use-this */
import { Args, Authorized, Ctx, FieldResolver, Query, Resolver, Root } from 'type-graphql';
import { DeviceStatus } from './deviceStatus.type';
import { AppContext, RoleType } from '../../auth/auth.type';
import { getDataSources } from '../../utils/getDataSources';
import { IdArgs } from '../shared';

@Resolver(DeviceStatus)
export class DeviceStatusResolver {
  @Authorized<RoleType>(RoleType.SUPERADMIN, RoleType.AGGREGATOR)
  @Query(() => DeviceStatus)
  deviceStatus(@Ctx() ctx: AppContext, @Args() { serialNo }: IdArgs): Promise<DeviceStatus> {
    const { statusApi } = getDataSources(ctx);
    return statusApi.getDeviceStatus(serialNo);
  }

  @FieldResolver(() => Boolean, { nullable: true })
  isAvailable(@Ctx() ctx: AppContext, @Root() deviceStatus: DeviceStatus): Promise<boolean | null> {
    const { deviceApi } = getDataSources(ctx);
    return deviceApi.getDeviceIsAvailable(deviceStatus.serialNo);
  }
}
