import { Field, ObjectType, registerEnumType } from 'type-graphql';
import { DeviceDataFragment, Device_Type_Enum } from '../generated/graphql';

type DeviceBase = Omit<DeviceDataFragment, '__typename'>;

registerEnumType(Device_Type_Enum, {
  name: 'Device_Type_Enum',
  description: 'Type of device, which can be eddi or zappi',
});
@ObjectType()
export class Device implements DeviceBase {
  @Field({ description: 'Serial Number of unit' })
  serialNo: number;

  @Field((type) => Device_Type_Enum)
  deviceClass: Device_Type_Enum;
}
