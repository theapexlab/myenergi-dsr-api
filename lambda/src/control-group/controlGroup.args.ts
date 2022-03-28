import { ArgsType, Field, Int } from 'type-graphql';
import { PaginationArgs } from '../shared';

@ArgsType()
export class ControlGroupsArgs extends PaginationArgs {}

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

  @Field(() => Int)
  adminGroupId: number;
}