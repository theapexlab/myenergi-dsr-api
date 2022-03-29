import { ArgsType, Field, Int } from 'type-graphql';

@ArgsType()
export class PaginationArgs {
  @Field(() => Int, { nullable: true })
  limit?: number;

  @Field(() => Int, { defaultValue: 0 })
  offset?: number;
}

@ArgsType()
export class IdArgs {
  @Field(() => Int)
  serialNo: number;
}

@ArgsType()
export class HistoryByIdsArgs extends PaginationArgs {
  @Field()
  startDate: Date;

  @Field()
  endDate: Date;
}
