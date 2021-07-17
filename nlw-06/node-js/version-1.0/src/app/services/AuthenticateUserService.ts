import { getCustomRepository } from 'typeorm';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

import authConfig from '@config/auth';

import { User } from '@models/User';
import { UsersRepositories } from 'app/repositories/UsersRepositories';
import { AppError } from 'app/error/AppError';

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  user: User;
  token: string;
}

class AuthenticateUserService {
  public async execute({ email, password }: IRequest): Promise<IResponse> {
    const usersRepositories = getCustomRepository(UsersRepositories);

    const user = await usersRepositories.findOne({ email });

    if (!user) {
      throw new AppError('Incorrect Email/Password');
    }

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new AppError('Incorrect Email/Password');
    }

    const { secret, expiresIn } = authConfig.jwt;

    const token = sign(
      {
        email: user.email,
      },
      secret,
      {
        subject: user.id,
        expiresIn,
      },
    );

    return { user, token };
  }
}

export { AuthenticateUserService };
