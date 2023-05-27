import { User as RawUser, Telephone as RawTelephone } from '@prisma/client';

import { Telephone } from 'app/entities/Telephone';
import { User } from 'app/entities/User';

import { Replace } from 'helpers/Replace';

export class PrismaUserMapper {
  static toPrisma(user: User) {
    return {
      email: user.email,
      name: user.name,
      password: user.password,
      telephones: {
        createMany: {
          data: user.telephones.map(telephone => ({
            area_code: telephone.area_code,
            number: telephone.number,
          })),
          skipDuplicates: true,
        },
      },
    };
  }

  static toDomain(raw: Replace<RawUser, { telephones: RawTelephone[] }>): User {
    const user = new User({
      id: raw.id,
      email: raw.email,
      name: raw.name,
      password: raw.password,
      telephones: raw.telephones.map(
        telephone =>
          new Telephone({
            area_code: telephone.area_code,
            number: telephone.number,
          }),
      ),
    });

    return user;
  }
}
