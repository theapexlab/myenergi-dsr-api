import { Field, ID, ObjectType } from 'type-graphql';

@ObjectType()
export class Device {
  @Field(() => ID)
  id: string;
}

/*
 * devices table -> id, name, serialNo, frek, boost
 *
 * deviceStatus table -> serialNo, frek, boo
 * */
