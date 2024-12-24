import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GetUsersOutput } from './dto/get-users.output';
import { UserEntity } from './user.entity';
import { CreateUserInput } from './dto/create-user.input';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {}

  // Поулчить всех пользователей
  async getUsers(): Promise<GetUsersOutput[]> {
    return await this.userRepository.find();
  }

  // Создать нового пользователя
  async createUser(input: CreateUserInput): Promise<UserEntity> {
    const user = this.userRepository.create(input); // Создать объект
    return this.userRepository.save(user); // Сохранить в БД
  }
}
