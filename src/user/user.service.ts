import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { UserInterface } from './interface/user.interface';

@Injectable()
export class UserService {

  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) { }

  async create(userInterface: UserInterface) {
    const user = this.userRepository.create(userInterface);
    return await this.userRepository.save(user);
  }

  async findByUsername(username: string) {
    return await this.userRepository.findOneBy({ username });
  }

  async findAll() {
    return await this.userRepository.find();
  }
}