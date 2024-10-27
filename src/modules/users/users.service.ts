import { Injectable, Logger } from '@nestjs/common';
import { UsersRepository } from './repository/users.repository';
import { IUser } from './interfaces/users.interface';
import { CreateUserDto } from './dtos/create-user.dto';

@Injectable()
export class UsersService {
  private logger: Logger = new Logger(UsersService.name);

  constructor(private readonly userRepository: UsersRepository) { }

  public async getAllUsers(): Promise<IUser[]> {
    return this.userRepository.findAll();
  }

  public async register(createUserDto: CreateUserDto): Promise<IUser> {
    return this.userRepository.store(createUserDto);
  }
}
