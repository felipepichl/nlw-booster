import { getCustomRepository, Repository } from 'typeorm';

import { User } from '@models/User';
import { UsersRepository } from 'app/repositories/UsersRepository';

interface IRequest {
  name: string;
  email: string;
}

class UsersServices {
  private usersRepository: Repository<User>;

  constructor() {
    this.usersRepository = getCustomRepository(UsersRepository);
  }

  public async execute({ name, email }: IRequest): Promise<User> {
    const userAlreadyExists = await this.usersRepository.findOne({ email });

    if (userAlreadyExists) {
      return userAlreadyExists;
    }

    const user = this.usersRepository.create({
      name,
      email,
    });

    await this.usersRepository.save(user);

    return user;
  }
}

export default new UsersServices();
