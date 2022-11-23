import { User } from '../../infra/prisma/models/User';
import { IUserRepository } from '../../repositories/IUserRepository';

interface IRequest {
  username: string;
  email: string;
  password: string;
  whatsapp: string;
}

class CreateUserServices {
  constructor(private usersRepository: IUserRepository) {}

  async execute({
    username,
    email,
    password,
    whatsapp,
  }: IRequest): Promise<User> {
    const user = await this.usersRepository.create({
      username,
      email,
      password,
      whatsapp,
    });

    return user;
  }
}

export { CreateUserServices };
