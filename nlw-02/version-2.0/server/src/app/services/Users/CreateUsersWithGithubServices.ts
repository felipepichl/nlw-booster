import { getCustomRepository, Repository } from 'typeorm';
import { hash } from 'bcryptjs';

import { User } from '@entities/User';
import { UsersRepository } from 'app/repositories/UsersRepository';

import { api } from 'services/api';
import { AppError } from 'app/error/AppError';

interface IRequest {
  username: string;
  email: string;
  password: string;
  whatsapp: string;
}

class CreateUsersWithGithubServices {
  private createUserRepository: Repository<User>;

  constructor() {
    this.createUserRepository = getCustomRepository(UsersRepository);
  }

  public async execute({
    username,
    email,
    password,
    whatsapp,
  }: IRequest): Promise<User> {
    const apiResponse = await api.get(`/${username}`);

    if (apiResponse.status === 404) {
      throw new AppError('Incorrect Github username', 401);
    }

    const { name, avatar_url, bio } = apiResponse.data;

    const userAlreadyExists = this.createUserRepository.find({
      where: email,
    });

    if (userAlreadyExists) {
      throw new AppError('User already exists');
    }

    const passwordHash = await hash(password, 8);

    const user = this.createUserRepository.create({
      name,
      email,
      password: passwordHash,
      avatar_url,
      bio,
      whatsapp,
    });

    await this.createUserRepository.save(user);

    delete user.password;

    return user;
  }
}

export { CreateUsersWithGithubServices };
