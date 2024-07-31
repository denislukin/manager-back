import { Resolver, Query } from '@nestjs/graphql';
import { User } from '../models/User';
import { UserService } from '../services/UserService';

@Resolver()
export class UserResolver {
  constructor(private userService: UserService) {}

  @Query(() => [User])
  getUsers() {
    return this.userService.getUsers();
  }
}
