import { getRepository, Repository } from 'typeorm';

import { ICreateUserDTO } from '@modules/users/dtos/ICreateUserDTO';
import { IUsersRepository } from '@modules/users/repositories/IUsersRepository';
import { User } from '../entities/User';

class UsersRepository implements IUsersRepository {
  private ormRepository: Repository<User>;

  constructor() {
    this.ormRepository = getRepository(User);
  }

  public async create({
    username,
    name,
    email,
    password,
  }: ICreateUserDTO): Promise<User | undefined> {
    const user = this.ormRepository.create({
      username,
      name,
      email,
      password,
    });

    await this.ormRepository.save(user);

    return user;
  }
}

export { UsersRepository };
