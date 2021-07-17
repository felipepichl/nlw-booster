import { Repository, getCustomRepository } from 'typeorm';

import { User } from '@models/User';
import { UsersRepositories } from '../repositories/UsersRepositories';

class ListUserServices {
  private usersRepository: Repository<User>;

  constructor() {
    this.usersRepository = getCustomRepository(UsersRepositories);
  }

  public async execute(): Promise<User[]> {
    const users = await this.usersRepository.find();

    return users;
  }
}

export { ListUserServices };
