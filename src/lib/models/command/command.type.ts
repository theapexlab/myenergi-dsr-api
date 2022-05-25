import { Field, Int, ObjectType } from 'type-graphql';
import { SetFrequencyCommandBaseArgs, SetLoadCommandBaseArgs } from './command.args';
import { ArrayMaxSize, ArrayMinSize } from 'class-validator';

@ObjectType()
export class SetLoad extends SetLoadCommandBaseArgs {
  @ArrayMinSize(1)
  @ArrayMaxSize(5)
  deviceAddresses: number[];
}

@ObjectType()
export class SetFrequency extends SetFrequencyCommandBaseArgs {}

@ObjectType()
export class CommandResponse {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => String, { nullable: true })
  commandInitiated?: string;

  @Field(() => Int, { nullable: true })
  csn?: number;

  @Field(() => String, { nullable: true })
  error?: string;
}
