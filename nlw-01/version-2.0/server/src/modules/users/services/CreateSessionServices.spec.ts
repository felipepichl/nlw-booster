import { FakeUsersRepository } from '../repositories/fakes/FakeUsersRepository';
import { FakeHashProvider } from '../providers/HashProvider/fakes/FakeHashProvider';

import { CreateUserServices } from './CreateUserServices';
import { CreateSessionServices } from './CreateSessionServices';

describe('CreateSession', () => {
  it('should be able to create a new session', async () => {
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

    const createSessionService = new CreateSessionServices(
      fakeHashProvider,
      fakeUsersRepository,
    );

    const response = await createSessionService.execute({
      email: user.email,
      password: user.password,
    });

    expect(response).toHaveProperty('token');
    expect(response.user).toEqual(user);
  });
});
