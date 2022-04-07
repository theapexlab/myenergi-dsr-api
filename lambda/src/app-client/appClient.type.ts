import { Field, ObjectType } from 'type-graphql';

@ObjectType()
export class AppClientId {
  @Field(() => String, { nullable: true })
  clientId: string | null;
}

@ObjectType()
export class AppClient extends AppClientId {
  @Field(() => String, { nullable: true })
  clientName: string | null;
}

@ObjectType()
export class AppClientDetails extends AppClient {
  @Field()
  clientSecret: string;
}
