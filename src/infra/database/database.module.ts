import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { AuthRepository } from 'app/repositories/AuthRepository';
import { UserRepository } from 'app/repositories/UserRepository';

import { PrismaService } from 'infra/database/prisma/prisma.service';
import { PrismaAuthRepository } from 'infra/database/prisma/repositories/PrismaAuthRepository';
import { PrismaUserRepository } from 'infra/database/prisma/repositories/PrismaUserRepository';

@Module({
  providers: [
    PrismaService,
    JwtService,
    {
      provide: UserRepository,
      useClass: PrismaUserRepository,
    },
    {
      provide: AuthRepository,
      useClass: PrismaAuthRepository,
    },
  ],
  exports: [UserRepository, AuthRepository],
})
export class DatabaseModule {}
