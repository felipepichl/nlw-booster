import { getCustomRepository } from 'typeorm';

import { User } from '@models/User';
import { UsersRepository } from 'app/repositories/UsersRepository';

interface IRequest {
  name: string;
  email: string;
}

class UsersServices {
  public async execute({ name, email }: IRequest): Promise<User> {
    const userRepository = getCustomRepository(UsersRepository);

    const userAlreadyExists = await userRepository.findOne({ email });

    if (userAlreadyExists) {
      return userAlreadyExists;
    }

    const user = userRepository.create({
      name,
      email,
    });

    await userRepository.save(user);

    return user;
  }
}

export default new UsersServices();
