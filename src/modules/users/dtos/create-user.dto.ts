import {
  IsAscii,
  IsNotEmpty,
  IsString,
  isStrongPassword,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @IsAscii()
  username: string;

  @IsString()
  @IsNotEmpty()
  @IsAscii()
  password: string;
}
