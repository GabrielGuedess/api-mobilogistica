import { ApiProperty } from '@nestjs/swagger';

import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export abstract class AuthDTO {
  @IsNotEmpty()
  @IsEmail()
  @ApiProperty({
    type: String,
    default: 'joe123@gmail.com',
    description: 'Your Email',
  })
  email: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(6)
  @ApiProperty({
    type: String,
    default: '123456',
    description: 'Your Password',
  })
  password: string;
}
