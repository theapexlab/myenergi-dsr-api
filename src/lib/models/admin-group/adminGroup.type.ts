import { Field, Int, ObjectType } from 'type-graphql';
import { AdminGroupFieldsFragment } from '../../generated/graphql';

type AdminGroupBase = Omit<AdminGroupFieldsFragment, '__typename'>;

@ObjectType()
export class AdminGroup implements AdminGroupBase {
  @Field(() => Int, { description: 'Id of the admin group' })
  id: number;

  @Field(() => String, { description: 'Name of the admin group' })
  name: string;
}
