import { ApiProperty } from '@nestjs/swagger';

import { IsNotEmpty, IsNumber } from 'class-validator';

export abstract class TelephoneDTO {
  @IsNotEmpty()
  @IsNumber()
  @ApiProperty({
    type: Number,
    default: 123456789,
    description: 'Your Phone Number',
  })
  number: number;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty({
    type: Number,
    default: 11,
    description: 'Your Area Code',
  })
  area_code: number;
}
