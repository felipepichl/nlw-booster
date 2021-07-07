import { getCustomRepository } from 'typeorm';

import { UsersRepositories } from 'app/repositories/UsersRepositories';
import { AppError } from 'app/error/AppError';

interface IRequest {
  email: string;
  password: string;
}

class AuthenticateUserService {
  public async execute({ email, password }: IRequest): Promise<void> {
    const usersRepositories = getCustomRepository(UsersRepositories);

    const userExists = await usersRepositories.findOne({ email });

    if (!userExists) {
      throw new AppError('Incorrect Email/Password');
    }
  }
}

export { AuthenticateUserService };
