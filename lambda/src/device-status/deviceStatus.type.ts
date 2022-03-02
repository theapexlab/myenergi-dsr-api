import { Field, ID, Int, ObjectType } from 'type-graphql';
import { EddiStatusFragment, ZappiStatusFragment } from '../generated/graphql';

type StatusBase = Omit<EddiStatusFragment | ZappiStatusFragment, '__typename'>;

@ObjectType()
export class DeviceStatus implements StatusBase {
  @Field(() => ID)
  serialNo: number;

  @Field(() => Int, { nullable: true })
  voltage?: number;

  @Field(() => Int, { nullable: true })
  frequency?: number;
}
