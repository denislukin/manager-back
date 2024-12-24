import { ObjectType, Field, Int } from '@nestjs/graphql';
import { UserInterface } from '../models/user';

@ObjectType()
export class GetUsersOutput implements UserInterface {
  @Field(() => Int, { nullable: true })
  id: number;

  @Field({ nullable: true })
  username: string;

  @Field({ nullable: true })
  displayName?: string;
}
