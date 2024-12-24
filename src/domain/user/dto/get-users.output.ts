import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class GetUsersOutput {
  @Field(() => Int, { nullable: true })
  id: number;

  @Field({ nullable: true })
  username: string;

  @Field({ nullable: true })
  displayName?: string;
}
