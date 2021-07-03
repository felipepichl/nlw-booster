import { Repository, getCustomRepository } from 'typeorm';

import { User } from '@models/User';
import { UsersRepositories } from '../repositories/UsersRepositories';

interface IRequest {
  name: string;
  email: string;
  password: string;
  admin: boolean;
}

class UsersServices {
  private usersRepository: Repository<User>;

  constructor() {
    this.usersRepository = getCustomRepository(UsersRepositories);
  }

  public async create({
    name,
    email,
    password,
    admin,
  }: IRequest): Promise<User> {
    const userAlreadyExists = await this.usersRepository.findOne({ email });

    if (userAlreadyExists) {
      return userAlreadyExists;
    }

    const user = this.usersRepository.create({
      name,
      email,
      password,
      admin,
    });

    await this.usersRepository.save(user);

    return user;
  }
}

export { UsersServices };
