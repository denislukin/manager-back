import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GetUsersOutput } from './dto/get-users.output';
import { CreateUserInput } from './dto/create-user.input';
import { UserRepository } from './repositories/user.repository';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserRepository)
    private userRepository: Repository<UserRepository>,
  ) {}

  async getUsers(): Promise<GetUsersOutput[]> {
    return await this.userRepository.find();
  }

  async createUser(input: CreateUserInput): Promise<UserRepository> {
    const user = this.userRepository.create(input);
    return this.userRepository.save(user);
  }
}
