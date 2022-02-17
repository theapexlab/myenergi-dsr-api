import { Arg, FieldResolver, ID, Query, Resolver } from 'type-graphql';
import { ControlGroup, GroupStatus } from '../types';

@Resolver(ControlGroup)
export class ControlGroupResolver {
  @FieldResolver(() => [GroupStatus])
  groupStatuses(): GroupStatus[] {
    return [];
  }

  @Query(() => [ControlGroup])
  controlGroups(): ControlGroup[] {
    return [];
  }

  @Query(() => ControlGroup)
  controlGroup(@Arg('id', () => ID) id: string): ControlGroup {
    return {
      id: '',
    };
  }
}
