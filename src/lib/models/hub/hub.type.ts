import { Field, ObjectType } from 'type-graphql';
import { HubDataFragment } from '../../generated/graphql';

type HubDetailsBase = Omit<HubDataFragment, '__typename'>;

@ObjectType()
export class HubDetails implements HubDetailsBase {
  @Field({ description: 'Serial Number of Hub' })
  serialNo: number;

  @Field({ description: 'Ip address of Hub' })
  ipAddress?: string;

  @Field({ description: 'Network Id of Hub' })
  networkId: number;

  @Field({ description: 'Port Number of Hub' })
  port: number;

  @Field({ description: 'Raw address of Hub' })
  addressRaw?: number;
}
@ObjectType()
export class DeviceHubDetails {
  @Field({ description: 'Serial Number of unit' })
  deviceSerialNo: number;

  @Field({ description: 'Raw Address (port) of unit' })
  deviceAddressRaw: number;

  @Field({ description: 'Hub details of unit' })
  hub?: HubDetails;
}
