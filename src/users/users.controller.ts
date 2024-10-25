import { Controller, Get } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get()
  public findAll(): string {
    return 'works';
  }
}
