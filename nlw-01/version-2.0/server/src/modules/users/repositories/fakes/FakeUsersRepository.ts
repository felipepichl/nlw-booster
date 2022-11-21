import { User } from '@modules/users/infra/prisma/models/User';
import { IUsersRepository } from '../IUsersRepository';

import { ICreateUserDTO } from '../../dtos/ICreateUserDTO';

class FakeUsersRepository implements IUsersRepository {
  private users: User[] = [];

  public async create(userData: ICreateUserDTO): Promise<User> {
    const user = new User();

    Object.assign(user, userData);

    this.users.push(user);

    return user;
  }

  public async findByEmail(email: string): Promise<User> {
    return this.users.find(user => user.email === email);
  }
}

export { FakeUsersRepository };
