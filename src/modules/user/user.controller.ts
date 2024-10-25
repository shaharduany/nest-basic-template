import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './schemas/user.entity';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('')
  public async getAllUsers(): Promise<User[]> {
    return this.userService.getAllUsers();
  }
}
