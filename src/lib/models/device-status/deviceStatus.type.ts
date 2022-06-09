import { Field, Float, Int, ObjectType } from 'type-graphql';
import { Device_Type_Enum, EddiStatusFragment, ZappiStatusFragment } from '../../generated/graphql';

type StatusBase = Omit<EddiStatusFragment | ZappiStatusFragment, '__typename' | 'updateDate'> & { updateDate: Date };

@ObjectType()
export class DeviceStatus implements StatusBase {
  @Field({ description: 'Serial Number of unit' })
  serialNo: number;

  @Field(() => Float, { nullable: true, description: 'Voltage Load in Watts on Phase 1' })
  voltage?: number;

  @Field(() => Float, { nullable: true, description: 'Frequency in 0.01Hz' })
  frequency?: number;

  @Field(() => Device_Type_Enum, { description: 'Class of the device Zappi | Eddi' })
  deviceClass: Device_Type_Enum;

  @Field(() => Float, { nullable: true, description: 'Charge energy in kWh delivered so far (Zappi)' })
  chargeEnergy?: number;

  @Field(() => Boolean, { nullable: true, description: 'DSR Load control active' })
  dsrLoadControlActive?: boolean;

  @Field(() => String, { nullable: true, description: 'Pilot state of Zappi' })
  pilotState?: string;

  @Field(() => Int, { nullable: true, description: 'Serial Number of HUB related to unit' })
  hubSerialNo?: number;

  @Field()
  updateDate: Date;
}
