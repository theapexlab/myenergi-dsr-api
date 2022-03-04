import { ArgsType, Field, Int } from 'type-graphql';
import { PaginationArgs } from '../shared';

@ArgsType()
export class DeviceHistoryArgs extends PaginationArgs {
  @Field(() => Int)
  serialNo: number;

  @Field()
  startDate: Date;

  @Field()
  endDate: Date;
}
