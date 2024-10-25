import { Injectable } from '@nestjs/common';
import { User } from './schemas/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  public async getAllUsers(): Promise<User[]> {
    return this.userRepository.find();
  }
}
