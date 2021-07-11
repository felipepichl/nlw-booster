import { Repository, getCustomRepository } from 'typeorm';
import { hash } from 'bcryptjs';

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
    admin = false,
  }: IRequest): Promise<User> {
    const userAlreadyExists = await this.usersRepository.findOne({ email });

    if (userAlreadyExists) {
      throw new AppError('Users already exists');
    }

    const passwordHash = await hash(password, 8);

    const user = this.usersRepository.create({
      name,
      email,
      password: passwordHash,
      admin,
    });

    await this.usersRepository.save(user);

    delete user.password;

    return user;
  }
}

export { CreateUserServices };
