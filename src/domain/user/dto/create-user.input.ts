import { InputType, Field } from '@nestjs/graphql';
import { CreateUserInterface } from '../models/user';

@InputType()
export class CreateUserInput implements CreateUserInterface {
  @Field()
  username: string;

  @Field()
  displayName?: string;
}
