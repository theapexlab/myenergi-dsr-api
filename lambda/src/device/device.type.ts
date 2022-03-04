import { Field, ObjectType } from 'type-graphql';
import { EddiDataFragment, ZappiDataFragment } from '../generated/graphql';

type DeviceBase = Omit<ZappiDataFragment | EddiDataFragment, '__typename'>;

@ObjectType()
export class Device implements DeviceBase {
  @Field({ description: 'Serial Number of unit' })
  serialNo: number;

  @Field({ nullable: true, description: '3200 : Eddi (Heater controller) OR 3300 : Zappi (Carcharger)' })
  productCode?: number;

  // todo: may it would be better to use deviceclass instead of product code
  @Field()
  deviceClass: string;
}
