import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

import { User } from 'app/entities/User';
import { UserRepository } from 'app/repositories/UserRepository';

import { PrismaUserMapper } from 'infra/database/prisma/mappers/PrismaUserMapper';
import { PrismaService } from 'infra/database/prisma/prisma.service';

@Injectable()
export class PrismaUserRepository implements UserRepository {
  constructor(private prisma: PrismaService) {}

  async create(user: User): Promise<User> {
    const userExist = await this.prisma.user.findUnique({
      where: { email: user.email },
      include: { telephones: true },
    });

    const numberExist = await this.prisma.telephone.findMany({
      where: { number: { in: user.telephones.map(item => item.number) } },
    });

    if (numberExist?.length > 0) {
      throw new HttpException(
        `Number (${numberExist
          .map(item => item.number)
          .join(', ')}) already exists!`,
        HttpStatus.CONFLICT,
      );
    }

    if (userExist) {
      throw new HttpException('User already exists!', HttpStatus.CONFLICT);
    }

    const numbers = user.telephones.map(telephones =>
      String(telephones.number),
    );
    const areaCodes = user.telephones.map(telephones =>
      String(telephones.area_code),
    );

    const invalidNumbers = numbers.filter(
      item => item.length < 8 || item.length > 9,
    );

    const invalidCodes = areaCodes.filter(
      item => item.length < 1 || item.length > 3,
    );

    if (invalidNumbers?.length > 0) {
      throw new HttpException(
        `Numbers (${invalidNumbers.join(', ')}) can have 8 or 9 characters`,
        HttpStatus.BAD_REQUEST,
      );
    }

    if (invalidCodes?.length > 0) {
      throw new HttpException(
        `Area codes (${invalidCodes.join(', ')}) can have 1 or 3 characters`,
        HttpStatus.BAD_REQUEST,
      );
    }

    const userPrisma = await this.prisma.user.create({
      data: PrismaUserMapper.toPrisma(user),
      include: { telephones: true },
    });

    return PrismaUserMapper.toDomain(userPrisma);
  }

  async findUserById(id: string): Promise<User> {
    const userPrisma = await this.prisma.user.findUnique({
      where: { id },
      include: { telephones: true },
    });

    if (!userPrisma) {
      throw new HttpException('User not found!', HttpStatus.NOT_FOUND);
    }

    return PrismaUserMapper.toDomain(userPrisma);
  }

  async findUserByEmail(email: string): Promise<User> {
    const userPrisma = await this.prisma.user.findUnique({
      where: { email },
      include: { telephones: true },
    });

    if (!userPrisma) {
      throw new HttpException('User not found!', HttpStatus.NOT_FOUND);
    }

    return PrismaUserMapper.toDomain(userPrisma);
  }
}
