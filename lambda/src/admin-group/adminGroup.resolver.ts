import { Resolver } from 'type-graphql';
import { AdminGroup } from './adminGroup.type';

@Resolver(AdminGroup)
export class AdminGroupResolver {
  // @FieldResolver(() => [GroupStatus])
  // groupStatuses(): GroupStatus[] {
  //   return [];
  // }
  // @Query(() => ControlGroup)
  // adminGroup(@Arg('id', () => ID) id: string): AdminGroup {
  //   return {
  //     id: '',
  //   };
  // }
}
