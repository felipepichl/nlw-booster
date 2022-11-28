import { injectable, inject } from 'tsyringe';
import { AppError } from '@shared/errors/AppError';

import { User } from '../../infra/prisma/models/User';
import { IUsersRepository } from '../../repositories/IUsersRepository';
import { IHashProvider } from '../../provider/HashProvider/models/IHashProvider';
import { IAuthProvider } from '../../provider/AuthProvider/models/IAuthProvider';

interface IRequest {
  username: string;
  email: string;
  password: string;
  whatsapp: string;
}

@injectable()
class CreateUserUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
    @inject('HashProvider')
    private hashProvider: IHashProvider,
    @inject('AuthProvider')
    private authProvider: IAuthProvider,
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

    const { name, avatar, bio } = await this.authProvider.auth(username);

    if (!name || !avatar || !bio) {
      throw new AppError('Github information does not found');
    }

    const user = await this.usersRepository.create({
      name,
      username,
      email,
      password: passwordHash,
      avatar,
      bio,
      whatsapp,
    });

    return user;
  }
}

export { CreateUserUseCase };
