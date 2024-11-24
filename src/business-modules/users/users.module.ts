import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { UsersRepositoryModule } from './repository/users-repository.module';

export const getUserModuleMetadata = () => ({
  imports: [UsersRepositoryModule],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],
});

@Module(getUserModuleMetadata())
export class UsersModule {}
