import { Arg, Ctx, FieldResolver, ID, Query, Resolver } from 'type-graphql';
import { Device, DeviceStatus } from '../types';

@Resolver(Device)
export class DeviceResolver {
  @FieldResolver(() => DeviceStatus)
  status(@Ctx() ctx: any): DeviceStatus {
    return ctx.deviceApi.getStatus();
  }

  @Query(() => [Device])
  devices(): Device[] {
    return [];
  }

  @Query(() => Device)
  async device(@Arg('id', () => ID) id: string) {
    return {};
  }
}
