import { Arg, ID, Query, Resolver } from 'type-graphql';
import { ControlGroup } from './controlGroup.type';

@Resolver(ControlGroup)
export class ControlGroupResolver {
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
