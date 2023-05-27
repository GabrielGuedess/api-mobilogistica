import { Telephone } from 'app/entities/Telephone';

describe('Telephone', () => {
  it('should be able to create a telephone', () => {
    const telephone = new Telephone({
      number: 123456789,
      area_code: 11,
    });

    expect(telephone).toBeTruthy();
  });
});
