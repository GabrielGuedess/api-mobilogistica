import { randomUUID } from 'node:crypto';

import { CreateUserUseCase } from 'app/useCases/createUser/CreateUserUseCase';
import { FindUserUseCase } from 'app/useCases/findUser/FindUserUseCase';

import { InMemoryUserRepository } from '../../../../test/repositories/in-memory-user-repository';

describe('Find User', () => {
  it('should be able to create a user', async () => {
    const usersRepository = new InMemoryUserRepository();

    const createUserUseCase = new CreateUserUseCase(usersRepository);

    const user = await createUserUseCase.execute({
      id: randomUUID(),
      email: 'gabrielrguedess@gmail.com',
      name: 'Gabriel Guedes',
      password: '123456',
      telephones: [{ number: 12345678, area_code: 11 }],
    });

    const findUserUseCase = new FindUserUseCase(usersRepository);

    const findUser = await findUserUseCase.execute({ id: user.id });

    expect(usersRepository.users).toHaveLength(1);
    expect(findUser).toEqual(user);
  });
});
