import { CreateUserUseCase } from 'app/useCases/createUser/CreateUserUseCase';

import { InMemoryUserRepository } from '../../../../test/repositories/in-memory-user-repository';

describe('Create User', () => {
  it('should be able to create a user', async () => {
    const usersRepository = new InMemoryUserRepository();

    const createUserUseCase = new CreateUserUseCase(usersRepository);

    const user = await createUserUseCase.execute({
      email: 'gabrielrguedess@gmail.com',
      name: 'Gabriel Guedes',
      password: '123456',
      telephones: [{ number: 12345678, area_code: 11 }],
    });

    expect(usersRepository.users).toHaveLength(1);
    expect(usersRepository.users[0]).toEqual(user);
  });
});
