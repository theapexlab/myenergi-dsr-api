import { ArgsType, Field, Int } from 'type-graphql';

@ArgsType()
export class PaginationArgs {
  @Field(() => Int, { defaultValue: 100 })
  limit: number;

  @Field(() => Int, { defaultValue: 0 })
  offset: number;
}
