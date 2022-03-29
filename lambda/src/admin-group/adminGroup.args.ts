import { ArgsType, Field, Int } from 'type-graphql';
import { HistoryByIdsArgs, PaginationArgs } from '../shared';

@ArgsType()
export class AdminGroupsArgs extends PaginationArgs {}

@ArgsType()
export class MutateAdminGroupArgs {
  @Field(() => Int)
  id: number;

  @Field(() => [Int])
  serialNos: number[];
}

@ArgsType()
export class AdminGroupHistoryArgs extends HistoryByIdsArgs {
  @Field(() => Int)
  id: number;
}
