import { AppError } from '@shared/errors/AppError';

import { User } from '../../infra/prisma/models/User';
import { IUsersRepository } from '../../repositories/IUsersRepository';
import { IHashProvider } from '../../provider/HashProvider/models/IHashProvider';

interface IRequest {
  username: string;
  email: string;
  password: string;
  whatsapp: string;
}

class CreateUserServices {
  constructor(
    private usersRepository: IUsersRepository,
    private hashProvider: IHashProvider,
  ) {}

  async execute({
    username,
    email,
    password,
    whatsapp,
  }: IRequest): Promise<User> {
    const userAlreadyExists = await this.usersRepository.findByEmail(email);

    if (userAlreadyExists) {
      throw new AppError('User already exists');
    }

    const passwordHash = await this.hashProvider.geneteHash(password);

    const user = await this.usersRepository.create({
      username,
      email,
      password: passwordHash,
      whatsapp,
    });

    return user;
  }
}

export { CreateUserServices };
