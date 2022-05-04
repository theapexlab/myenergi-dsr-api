import { Field, ObjectType } from 'type-graphql';

@ObjectType()
export class AffectedResponse {
  @Field()
  affectedRows: number;
}
