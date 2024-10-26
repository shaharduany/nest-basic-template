import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';
import { IUser } from './interfaces/users.interface';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('')
  public async search(): Promise<IUser[]> {
    return this.usersService.getAllUsers();
  }
}
