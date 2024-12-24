import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UserService } from './user.service';
import { CreateUserInput } from './dto/create-user.input';
import { UserRepository } from './repositories/user.repository';

@Resolver()
export class UserResolver {
  constructor(private userService: UserService) {}

  @Query(() => [UserRepository])
  getUsers() {
    return this.userService.getUsers();
  }

  // Мутация: создать пользователя
  @Mutation(() => UserRepository, { name: 'createUser' })
  createUser(@Args('createUserInput') createUserInput: CreateUserInput) {
    return this.userService.createUser(createUserInput);
  }
}
