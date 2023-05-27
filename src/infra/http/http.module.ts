import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { AuthUserUseCase } from 'app/useCases/authUser/AuthUserUseCase';
import { CreateUserUseCase } from 'app/useCases/createUser/CreateUserUseCase';
import { FindUserUseCase } from 'app/useCases/findUser/FindUserUseCase';

import { DatabaseModule } from 'infra/database/database.module';

import { AuthController } from './controllers/auth.controller';
import { UserController } from './controllers/user.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [UserController, AuthController],
  providers: [CreateUserUseCase, FindUserUseCase, AuthUserUseCase, JwtService],
})
export class HttpModule {}
