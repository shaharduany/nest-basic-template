import { Repository } from 'typeorm';
import { UserSchema } from './schemas/users.schema';
import { InjectRepository } from '@nestjs/typeorm';
import { IUser } from '../interfaces/users.interface';
import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from '../dtos/create-user.dto';
import { HelpersService } from '@app/core-modules/helpers/helpers.service';

@Injectable()
export class UsersRepository extends Repository<UserSchema> {
  constructor(
    @InjectRepository(UserSchema)
    private readonly nativeRepository: Repository<UserSchema>,
    @Inject(HelpersService)
    private readonly helpersService: HelpersService,
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

  public async store(createUserDto: CreateUserDto): Promise<IUser> {
    createUserDto.password = await this.helpersService.hashValue(
      createUserDto.password,
    );
    const {
      raw: [user],
    } = await this.nativeRepository.insert(createUserDto);

    return user;
  }
}
