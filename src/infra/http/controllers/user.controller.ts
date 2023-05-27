import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiForbiddenResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiParam,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';

import { CreateUserUseCase } from 'app/useCases/createUser/CreateUserUseCase';
import { FindUserUseCase } from 'app/useCases/findUser/FindUserUseCase';

import { UserDTO } from 'infra/http/dtos/UserDTO';
import { UserResponseDTO } from 'infra/http/dtos/UserResponseDTO';
import { AuthGuard } from 'infra/http/guard/auth.guard';
import { UserViewModel } from 'infra/http/view-models/UserViewModel';

@ApiTags('users')
@Controller('users')
export class UserController {
  constructor(
    private createUserUseCase: CreateUserUseCase,
    private findUserUseCase: FindUserUseCase,
  ) {}

  @Get(':id')
  @ApiParam({
    type: String,
    name: 'id',
    description: 'Your User Id',
    allowEmptyValue: false,
  })
  @ApiOkResponse({ description: 'User found successfully!' })
  @ApiNotFoundResponse({ description: 'User not found!' })
  async findUser(@Param() params: { id: string }) {
    const { id } = params;

    const user = await this.findUserUseCase.execute({ id });

    return UserViewModel.toHTTPComplete(user);
  }

  @Get('profile/me')
  @UseGuards(AuthGuard)
  @ApiBearerAuth('token')
  @ApiOkResponse({ description: 'User found successfully!' })
  @ApiUnauthorizedResponse({ description: 'Invalid token!' })
  @ApiForbiddenResponse({ description: 'Missing token!' })
  async findMe(@Request() req: { user: { id: string } }) {
    const user = await this.findUserUseCase.execute({ id: req.user.id });

    return UserViewModel.toHTTPComplete(user);
  }

  @Post()
  @ApiCreatedResponse({
    description: 'User created successfully!',
    type: UserResponseDTO,
  })
  @ApiBadRequestResponse({
    description: 'Could not create user!',
  })
  async createUser(@Body() body: UserDTO) {
    const { email, name, password, telephones } = body;

    const user = await this.createUserUseCase.execute({
      email,
      name,
      password,
      telephones,
    });

    return UserViewModel.toHTTP(user);
  }
}
