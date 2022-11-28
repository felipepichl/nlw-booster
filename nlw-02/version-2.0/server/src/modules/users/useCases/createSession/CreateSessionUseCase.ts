import { AppError } from 'app/error/AppError';
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

class CreateSessionUseCase {
  constructor(
    private usersRepository: IUsersRepository,
    private hashProvider: IHashProvider,
  ) {}

  async execute({ email, password }: IRequest): Promise<IResponse> {
    const user = await this.usersRepository.findByEmail(email);

    if (!user) {
      throw new AppError('Incorrect Email/Password combination');
    }

    const passwordHashed = await this.hashProvider.compareHash(
      password,
      user.password,
    );

    if (passwordHashed) {
      throw new AppError('Incorrect Email/Password combination');
    }

    const response: IResponse = {
      user,
      token: '',
    };

    return response;
  }
}

export { CreateSessionUseCase };
