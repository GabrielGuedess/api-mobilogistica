import { Injectable } from '@nestjs/common';

import { hash } from 'bcrypt';

import { Telephone, TelephoneProps } from 'app/entities/Telephone';
import { User } from 'app/entities/User';
import { UserRepository } from 'app/repositories/UserRepository';

interface CreateUserUseCaseRequest {
  name: string;
  email: string;
  password: string;
  telephones: Omit<TelephoneProps, 'id'>[];
}

@Injectable()
export class CreateUserUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute(request: CreateUserUseCaseRequest): Promise<User> {
    const passwordHash = await hash(request.password, 8);

    const createUser = new User({
      email: request.email,
      name: request.name,
      password: passwordHash,
      telephones: request.telephones.map(
        telephone =>
          new Telephone({
            area_code: telephone.area_code,
            number: telephone.number,
          }),
      ),
    });

    const user = await this.userRepository.create(createUser);

    return user;
  }
}
