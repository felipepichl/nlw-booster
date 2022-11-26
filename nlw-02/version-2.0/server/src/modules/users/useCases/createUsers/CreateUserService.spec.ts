import { AppError } from '@shared/errors/AppError';

import { UsersRepositoryInMemory } from '../../repositories/in-memory/UsersRepositoryInMemory';
import { CreateUserServices } from './CreateUserServices';

import { HashProviderInMemory } from '../../provider/HashProvider/in-memory/HashProviderInMemory';
import { AuthProviderInMemory } from '../../provider/AuthProvider/in-memory/AuthProviderInMemory';

let usersRepositoryInMemory: UsersRepositoryInMemory;
let createUserServices: CreateUserServices;
let hashProviderInMemory: HashProviderInMemory;
let authProviderInMemory: AuthProviderInMemory;

describe('Create User', () => {
  beforeEach(() => {
    usersRepositoryInMemory = new UsersRepositoryInMemory();
    hashProviderInMemory = new HashProviderInMemory();
    authProviderInMemory = new AuthProviderInMemory();

    createUserServices = new CreateUserServices(
      usersRepositoryInMemory,
      hashProviderInMemory,
      authProviderInMemory,
    );
  });

  it('should be able to create a new user', async () => {
    await authProviderInMemory.auth('github_user');

    const user = await createUserServices.execute({
      username: 'user_test',
      email: 'test@teste.com',
      password: 'hash123',
      whatsapp: '55999998888',
    });

    expect(user).toHaveProperty('id');
  });

  it('should not be able to create a new user with email exists', async () => {
    expect(async () => {
      await createUserServices.execute({
        username: 'user_test',
        email: 'test@teste.com',
        password: 'hash123',
        whatsapp: '55999998888',
      });
      await createUserServices.execute({
        username: 'user_test',
        email: 'test@teste.com',
        password: 'hash123',
        whatsapp: '55999998888',
      });
    }).rejects.toBeInstanceOf(AppError);
  });

  it('should be able to create a user with Github', async () => {
    expect(async () => {
      await createUserServices.execute({
        username: 'user_test',
        email: 'test@teste.com',
        password: 'hash123',
        whatsapp: '55999998888',
      });
    }).rejects.toBeInstanceOf(AppError);
  });
});
