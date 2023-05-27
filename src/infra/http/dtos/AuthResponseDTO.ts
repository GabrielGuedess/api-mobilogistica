import { ApiProperty } from '@nestjs/swagger';

export abstract class AuthResponseDTO {
  @ApiProperty()
  token: string;
}
