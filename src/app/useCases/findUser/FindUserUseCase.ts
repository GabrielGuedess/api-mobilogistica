import { Injectable } from '@nestjs/common';

import { User } from 'app/entities/User';
import { UserRepository } from 'app/repositories/UserRepository';

interface FindUserUseCaseRequest {
  id: string;
}

@Injectable()
export class FindUserUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute(request: FindUserUseCaseRequest): Promise<User> {
    const user = await this.userRepository.findUserById(request.id);

    return user;
  }
}
