import { Field, ID, ObjectType } from 'type-graphql';
import { ZappiDataFragment, EddiDataFragment } from '../generated/graphql';

type DeviceBase = Omit<ZappiDataFragment | EddiDataFragment, '__typename'>;

@ObjectType()
export class Device implements DeviceBase {
  @Field(() => ID)
  serialNo: number;

  @Field({ nullable: true, description: '3200 : Eddi (Heater controller) OR 3300 : Zappi (Carcharger)' })
  productCode?: number;

  // todo: may it would be better to use deviceclass instead of product code
  @Field()
  deviceClass: string;
}
