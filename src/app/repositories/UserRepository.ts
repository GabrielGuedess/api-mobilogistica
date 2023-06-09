import { User } from 'app/entities/User';

export abstract class UserRepository {
  abstract create(user: User): Promise<User>;
  abstract findUserById(id: string): Promise<User>;
  abstract findUserByEmail(email: string): Promise<User>;
}
