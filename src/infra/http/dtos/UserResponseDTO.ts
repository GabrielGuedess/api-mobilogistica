import { ApiProperty } from '@nestjs/swagger';

export abstract class UserResponseDTO {
  @ApiProperty()
  id: string;

  @ApiProperty()
  created_at: Date;

  @ApiProperty()
  modified_at: Date;
}
