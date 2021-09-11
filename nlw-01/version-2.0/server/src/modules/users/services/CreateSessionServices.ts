import { injectable, inject } from 'tsyringe';

import authConfig from '@config/authConfig';

import { AppError } from '@shared/errors/AppError';

import { sign } from 'jsonwebtoken';
import { User } from '../infra/typeorm/entities/User';
import { IUsersRepository } from '../repositories/IUsersRepository';
import { IHashProvider } from '../providers/HashProvider/models/IHashProvider';

interface IResponse {
  user: User;
  token: string;
}

interface IRequest {
  email: string;
  password: string;
}

@injectable()
class CreateSessionServices {
  constructor(
    @inject('HashProvider')
    private hashProvider: IHashProvider,

    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  public async execute({ email, password }: IRequest): Promise<IResponse> {
    const user = await this.usersRepository.findByEmail(email);

    if (!user) {
      throw new AppError('Incorrect Email/Password');
    }

    const passwordMatch = await this.hashProvider.compareHash(
      password,
      user.password,
    );

    if (!passwordMatch) {
      throw new AppError('Incorrect Email/Password');
    }

    const { secret, expiresIn } = authConfig.jwt;

    const token = sign({}, secret, {
      subject: user.id,
      expiresIn,
    });

    return { user, token };
  }
}

export { CreateSessionServices };
