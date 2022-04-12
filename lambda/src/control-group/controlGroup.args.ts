import { ArgsType, Field, Int } from 'type-graphql';
import { HistoryByIdsArgs, PaginationArgs } from '../shared';

@ArgsType()
export class ControlGroupsArgs extends PaginationArgs {
  @Field(() => Int, { description: 'Id of the control Group' })
  id: number;
}
@ArgsType()
export class MutateControlGroupArgs {
  @Field(() => Int)
  id: number;

  @Field(() => [Int])
  serialNos: number[];
}

@ArgsType()
export class CreateControlGroupArgs {
  @Field()
  name: string;
}

@ArgsType()
export class ControlGroupHistoryArgs extends HistoryByIdsArgs {
  @Field(() => Int)
  id: number;
}
