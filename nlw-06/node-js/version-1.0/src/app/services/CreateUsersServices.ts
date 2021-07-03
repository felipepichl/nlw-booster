import { Repository, getCustomRepository } from 'typeorm';

import { User } from '@models/User';
import { AppError } from 'app/error/AppError';
import { UsersRepositories } from '../repositories/UsersRepositories';

interface IRequest {
  name: string;
  email: string;
  password: string;
  admin?: boolean;
}

class CreateUserServices {
  private usersRepository: Repository<User>;

  constructor() {
    this.usersRepository = getCustomRepository(UsersRepositories);
  }

  public async execute({
    name,
    email,
    password,
    admin,
  }: IRequest): Promise<User> {
    if (!email) {
      throw new AppError('Incorrect email');
    }

    const userAlreadyExists = await this.usersRepository.findOne({ email });

    if (userAlreadyExists) {
      throw new AppError('Users already exists');
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

export { CreateUserServices };
