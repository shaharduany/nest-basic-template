import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Get,
  Post,
  UseInterceptors,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { IUser } from './interfaces/users.interface';
import { CreateUserDto } from './dtos/create-user.dto';

@UseInterceptors(ClassSerializerInterceptor)
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('')
  public async search(): Promise<IUser[]> {
    return this.usersService.getAllUsers();
  }

  @Post('register')
  public async register(@Body() CreateUserDto: CreateUserDto): Promise<IUser> {
    return this.usersService.register(CreateUserDto);
  }
}
