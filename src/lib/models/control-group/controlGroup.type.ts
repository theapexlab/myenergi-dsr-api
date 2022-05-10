import { Field, Int, ObjectType } from 'type-graphql';
import { ControlGroupFieldsFragment } from '../../generated/graphql';
import { AdminGroup } from '../admin-group';

type ControlGroupBase = Omit<ControlGroupFieldsFragment, '__typename'>;

@ObjectType()
export class ControlGroup implements ControlGroupBase {
  @Field(() => Int, { description: 'Id of the control Group' })
  id: number;

  @Field(() => String, { description: 'Name of the control Group' })
  name: string;

  @Field(() => String, { description: 'Id of the owners admin group ' })
  adminGroupId: number;
}

@ObjectType()
export class AdminControlGroup {
  @Field(() => Int, { description: 'Id of the control Group' })
  id: number;

  @Field(() => String, { description: 'Name of the control Group' })
  name: string;

  @Field(() => AdminGroup, { description: 'Name of the owners admin group ' })
  adminGroup: AdminGroup;
}
