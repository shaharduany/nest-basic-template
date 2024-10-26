import { Repository } from 'typeorm';
import { UserSchema } from './schemas/users.schema';
import { InjectRepository } from '@nestjs/typeorm';
import { IUser } from '../interfaces/users.interface';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersRepository extends Repository<UserSchema> {
  constructor(
    @InjectRepository(UserSchema)
    private readonly nativeRepository: Repository<UserSchema>,
  ) {
    super(
      nativeRepository.target,
      nativeRepository.manager,
      nativeRepository.queryRunner,
    );
  }

  public findAll(): Promise<IUser[]> {
    return this.nativeRepository.find();
  }
}
