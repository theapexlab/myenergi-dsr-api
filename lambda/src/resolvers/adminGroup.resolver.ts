import { Arg, FieldResolver, ID, Query, Resolver } from 'type-graphql';
import { AdminGroup, ControlGroup, GroupStatus } from '../types';

@Resolver(AdminGroup)
export class AdminGroupResolver {
  @FieldResolver(() => [GroupStatus])
  groupStatuses(): GroupStatus[] {
    return [];
  }

  @Query(() => ControlGroup)
  adminGroup(@Arg('id', () => ID) id: string): AdminGroup {
    return {
      id: '',
    };
  }
}
