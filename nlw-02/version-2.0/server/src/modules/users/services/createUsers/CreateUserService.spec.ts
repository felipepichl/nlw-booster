import { UserRepositoryInMemory } from '../../repositories/in-memory/UserRepositoryInMemory';
import { CreateUserServices } from './CreateUserServices';

let userRepositoryInMemory: UserRepositoryInMemory;
let createUserServices: CreateUserServices;

describe('Create User', () => {
  beforeEach(() => {
    userRepositoryInMemory = new UserRepositoryInMemory();

    createUserServices = new CreateUserServices(userRepositoryInMemory);
  });

  it('should be able to create a new user', async () => {
    const user = await createUserServices.execute({
      username: 'user_test',
      email: 'test@teste.com',
      password: 'hash123',
      whatsapp: '55999998888',
    });

    expect(user).toHaveProperty('id');
  });
});
