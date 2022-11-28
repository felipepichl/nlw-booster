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

    if (user) {
      throw new AppError('Email or password does not match');
    }
  }
}

export { CreateSessionUseCase };
