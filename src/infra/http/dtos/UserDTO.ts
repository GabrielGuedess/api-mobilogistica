import { ApiProperty } from '@nestjs/swagger';

import { Type } from 'class-transformer';
import {
  ArrayNotEmpty,
  IsArray,
  IsEmail,
  IsNotEmpty,
  IsString,
  MinLength,
  ValidateNested,
} from 'class-validator';

import { TelephoneDTO } from 'infra/http/dtos/TelephoneDTO';

export abstract class UserDTO {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({ type: String, default: 'Joe', description: 'Your Name' })
  name: string;

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

  @IsArray()
  @ArrayNotEmpty()
  @ValidateNested({ each: true })
  @Type(() => TelephoneDTO)
  @ApiProperty({ isArray: true, type: TelephoneDTO })
  telephones: TelephoneDTO[];
}
