import { User } from 'app/entities/User';

export class UserViewModel {
  static toHTTP(user: User) {
    return {
      id: user.id,
      created_at: user.createdAt,
      modified_at: user.modifiedAt,
    };
  }
  static toHTTPComplete(user: User) {
    return {
      id: user.id,
      email: user.email,
      telephones: user.telephones.map(telephone => ({
        area_code: telephone.area_code,
        number: telephone.number,
      })),
      created_at: user.createdAt,
      modified_at: user.modifiedAt,
    };
  }
}
