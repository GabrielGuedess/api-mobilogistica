import { Injectable } from '@nestjs/common';

import { AuthRepository } from 'app/repositories/AuthRepository';

interface AuthUserUseCaseRequest {
  email: string;
  password: string;
}

interface AuthUserUseCaseResponse {
  token: string;
}

@Injectable()
export class AuthUserUseCase {
  constructor(private authRepository: AuthRepository) {}

  async execute(
    request: AuthUserUseCaseRequest,
  ): Promise<AuthUserUseCaseResponse> {
    const { token } = await this.authRepository.signIn({
      email: request.email,
      password: request.password,
    });

    return { token };
  }
}
