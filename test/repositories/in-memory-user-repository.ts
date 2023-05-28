import { User } from 'app/entities/User';
import { UserRepository } from 'app/repositories/UserRepository';

export class InMemoryUserRepository implements UserRepository {
  public users: User[] = [];

  async create(user: User): Promise<User> {
    const userExist = this.users.some(item => item.email === user.email);

    if (userExist) {
      throw new Error('User already exists!');
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
      throw new Error(
        `Numbers (${invalidNumbers.join(', ')}) can have 8 or 9 characters`,
      );
    }

    if (invalidCodes?.length > 0) {
      throw new Error(
        `Area codes (${invalidCodes.join(', ')}) can have 1 or 3 characters`,
      );
    }

    this.users.push(user);

    return user;
  }

  async findUserById(id: string): Promise<User> {
    return this.users.find(item => item.id === id);
  }

  async findUserByEmail(email: string): Promise<User> {
    return this.users.find(item => item.email === email);
  }
}
