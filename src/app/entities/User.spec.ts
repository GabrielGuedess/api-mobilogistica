import { Telephone } from 'app/entities/Telephone';
import { User } from 'app/entities/User';

describe('User', () => {
  it('should be able to create a user', () => {
    const telephones = [{ number: 123456789, area_code: 11 }];

    const user = new User({
      name: 'Gabriel',
      email: 'gabrielrguedess@gmail.com',
      password: '123456',
      telephones: telephones.map(
        telephone =>
          new Telephone({
            number: telephone.number,
            area_code: telephone.area_code,
          }),
      ),
    });

    expect(user).toBeTruthy();
  });
});
