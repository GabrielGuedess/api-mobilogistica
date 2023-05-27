import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { compare } from 'bcrypt';

import {
  AuthRepository,
  Credentials,
  SignInResponse,
} from 'app/repositories/AuthRepository';

import { PrismaService } from 'infra/database/prisma/prisma.service';

@Injectable()
export class PrismaAuthRepository implements AuthRepository {
  constructor(private prisma: PrismaService, private jwtService: JwtService) {}

  async signIn(credentials: Credentials): Promise<SignInResponse> {
    const user = await this.prisma.user.findUnique({
      where: { email: credentials.email },
      include: { telephones: true },
    });

    if (!user) {
      throw new HttpException(
        'Email or password incorrect!',
        HttpStatus.UNAUTHORIZED,
      );
    }

    const passwordMatch = await compare(credentials.password, user.password);

    if (!passwordMatch) {
      throw new HttpException(
        'Email or password incorrect!',
        HttpStatus.UNAUTHORIZED,
      );
    }

    const payload = { id: user.id, email: user.email };

    return {
      token: await this.jwtService.signAsync(payload, {
        secret: process.env.JWT_KEY,
        expiresIn: '2d',
      }),
    };
  }
}
