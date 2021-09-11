import { FakeUsersRepository } from '../repositories/fakes/FakeUsersRepository';
import { FakeHashProvider } from '../providers/HashProvider/fakes/FakeHashProvider';

import { CreateUserServices } from './CreateUserServices';

describe('CreateUser', () => {
  it('should be able to create a new user', async () => {
    const fakeUsersRepository = new FakeUsersRepository();
    const fakeHashProvider = new FakeHashProvider();

    const createUserServices = new CreateUserServices(
      fakeHashProvider,
      fakeUsersRepository,
    );

    const user = await createUserServices.execute({
      name: 'John Due',
      email: 'johndue@example.com',
      password: 'hash666',
      username: 'johndue',
    });

    expect(user).toHaveProperty('id');
  });
});
