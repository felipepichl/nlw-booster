import { injectable, inject } from 'tsyringe';

import { User } from '../infra/prisma/models/User';

import { IUsersRepository } from '../repositories/IUsersRepository';
import { IHashProvider } from '../providers/HashProvider/models/IHashProvider';

interface IRequest {
  username: string;
  name: string;
  email: string;
  password: string;
}

@injectable()
class CreateUserServices {
  constructor(
    @inject('HashProvider')
    private hashProvider: IHashProvider,

    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  public async execute({
    username,
    name,
    email,
    password,
  }: IRequest): Promise<User> {
    const passwordHash = await this.hashProvider.generateHash(password);

    const user = await this.usersRepository.create({
      username,
      name,
      email,
      password: passwordHash,
    });

    return user;
  }
}

export { CreateUserServices };
