import { injectable, inject } from 'tsyringe';
import { sign } from 'jsonwebtoken';

import { AppError } from '@shared/errors/AppError';

import auth from '@config/auth';
import { IUsersRepository } from '../../repositories/IUsersRepository';
import { IHashProvider } from '../../provider/HashProvider/models/IHashProvider';

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  user: {
    name: string;
    email: string;
  };

  token: string;
}

@injectable()
class CreateSessionUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
    @inject('HashProvider')
    private hashProvider: IHashProvider,
  ) {}

  async execute({ email, password }: IRequest): Promise<IResponse> {
    const user = await this.usersRepository.findByEmail(email);

    if (!user) {
      throw new AppError('Incorrect Email/Password combination', 401);
    }

    const passwordHashed = await this.hashProvider.compareHash(
      password,
      user.password,
    );

    if (!passwordHashed) {
      throw new AppError('Incorrect Email/Password combination', 401);
    }

    const { secret, expiresIn } = auth.jwt;

    const token = sign({}, secret, {
      subject: user.id,
      expiresIn,
    });

    const response: IResponse = {
      user,
      token,
    };

    return response;
  }
}

export { CreateSessionUseCase };
