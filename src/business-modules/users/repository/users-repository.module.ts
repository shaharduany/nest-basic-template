import { Module } from '@nestjs/common';
import { UsersRepository } from './users.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserSchema } from './schemas/users.schema';

@Module({
  imports: [TypeOrmModule.forFeature([UserSchema])],
  providers: [UsersRepository],
  exports: [UsersRepository],
})
export class UsersRepositoryModule {}

