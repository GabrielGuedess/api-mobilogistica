import { Body, Controller, Post } from '@nestjs/common';
import {
  ApiCreatedResponse,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';

import { AuthUserUseCase } from 'app/useCases/authUser/AuthUserUseCase';

import { AuthDTO } from 'infra/http/dtos/AuthDTO';
import { AuthResponseDTO } from 'infra/http/dtos/AuthResponseDTO';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private authUserUseCase: AuthUserUseCase) {}

  @Post()
  @ApiCreatedResponse({
    description: 'user logged in successfully!',
    type: AuthResponseDTO,
  })
  @ApiUnauthorizedResponse({
    description: 'Email or password incorrect!',
  })
  async signIn(@Body() body: AuthDTO) {
    const { email, password } = body;

    const { token } = await this.authUserUseCase.execute({ email, password });

    return { token };
  }
}
