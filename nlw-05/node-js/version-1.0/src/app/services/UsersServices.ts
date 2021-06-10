import { getCustomRepository } from 'typeorm';

import { User } from '@models/User';
import { UsersRepository } from 'app/repositories/UsersRepository';

import { AppError } from 'app/errors/AppError';

interface IRequest {
  name: string;
  email: string;
}

interface IResponse {
  user: User;
}

class UsersServices {
  public async execute({ name, email }: IRequest): Promise<IResponse> {
    const userRepository = getCustomRepository(UsersRepository);

    console.log(email);

    const userAlreadyExists = await userRepository.findOne({ email });

    console.log(userAlreadyExists);

    if (userAlreadyExists) {
      throw new AppError('User already exists');
    }

    const user = userRepository.create({
      name,
      email,
    });

    await userRepository.save(user);

    return { user };
  }
}

export default new UsersServices();
