import { Field, Int, ObjectType } from 'type-graphql';
import { EddiStatusFragment, ZappiStatusFragment } from '../generated/graphql';

type StatusBase = Omit<EddiStatusFragment | ZappiStatusFragment, '__typename' | 'updateDate'> & { updateDate: Date };

@ObjectType()
export class DeviceStatus implements StatusBase {
  @Field({ description: 'Serial Number of unit' })
  serialNo: number;

  @Field(() => Int, { nullable: true, description: 'Voltage Load in Watts on Phase 1' })
  voltage?: number;

  @Field(() => Int, { nullable: true, description: 'Frequency in 0.01Hz' })
  frequency?: number;

  @Field({ description: 'Class of the device Zappi | Eddi' })
  deviceClass: string;

  @Field(() => Int, { nullable: true, description: 'Charge energy in kWh delivered so far (Zappi)' })
  chargeEnergy?: number;

  @Field()
  updateDate: Date;
}
