import { AppError } from '@shared/errors/AppError';
import { FakeUsersRepository } from '../repositories/fakes/FakeUsersRepository';
import { FakeHashProvider } from '../providers/HashProvider/fakes/FakeHashProvider';

import { CreateUserServices } from './CreateUserServices';
import { CreateSessionServices } from './CreateSessionServices';

let fakeHashProvider: FakeHashProvider;
let fakeUsersRepository: FakeUsersRepository;

let createUserServices: CreateUserServices;
let createSessionService: CreateSessionServices;

describe('CreateSession', () => {
  beforeEach(() => {
    fakeHashProvider = new FakeHashProvider();
    fakeUsersRepository = new FakeUsersRepository();

    createUserServices = new CreateUserServices(
      fakeHashProvider,
      fakeUsersRepository,
    );

    createSessionService = new CreateSessionServices(
      fakeHashProvider,
      fakeUsersRepository,
    );
  });

  it('should be able to create a new session', async () => {
    const user = await createUserServices.execute({
      name: 'John Due',
      email: 'johndue@example.com',
      password: 'hash666',
      username: 'johndue',
    });

    const response = await createSessionService.execute({
      email: user.email,
      password: user.password,
    });

    expect(response).toHaveProperty('token');
    expect(response.user).toEqual(user);
  });

  it('should be able to create a new session with non existing user', async () => {
    createSessionService = new CreateSessionServices(
      fakeHashProvider,
      fakeUsersRepository,
    );

    expect(
      createSessionService.execute({
        email: 'john.doe@example.com',
        password: '67899876',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able to create session with wrong password', async () => {
    await fakeUsersRepository.create({
      name: 'John Due',
      email: 'johndue@example.com',
      password: 'hash666',
      username: 'johndue',
    });

    await expect(
      createSessionService.execute({
        email: 'johndue@example.com',
        password: 'wrong-password',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
