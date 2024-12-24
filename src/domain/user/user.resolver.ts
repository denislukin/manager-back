import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UserService } from './user.service';
import { UserEntity } from './user.entity';
import { CreateUserInput } from './dto/create-user.input';

@Resolver()
export class UserResolver {
  constructor(private userService: UserService) {}

  @Query(() => [UserEntity])
  getUsers() {
    return this.userService.getUsers();
  }

  // Мутация: создать пользователя
  @Mutation(() => UserEntity, { name: 'createUser' })
  createUser(@Args('createUserInput') createUserInput: CreateUserInput) {
    return this.userService.createUser(createUserInput);
  }
}
