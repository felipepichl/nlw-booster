import { FakeUsersRepository } from '../repositories/fakes/FakeUsersRepository';
import { FakeHashProvider } from '../providers/HashProvider/fakes/FakeHashProvider';

import { CreateUserServices } from './CreateUserServices';

let fakeHashProvider: FakeHashProvider;
let fakeUsersRepository: FakeUsersRepository;

let createUserServices: CreateUserServices;

describe('CreateUser', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    fakeHashProvider = new FakeHashProvider();

    createUserServices = new CreateUserServices(
      fakeHashProvider,
      fakeUsersRepository,
    );
  });

  it('should be able to create a new user', async () => {
    const user = await createUserServices.execute({
      name: 'John Due',
      email: 'johndue@example.com',
      password: 'hash666',
      username: 'johndue',
    });

    expect(user).toHaveProperty('id');
  });
});
