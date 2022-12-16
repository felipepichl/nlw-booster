import { injectable, inject } from "tsyringe";

import { AppError } from "@shared/errors/AppError";

import { User } from "../../infra/prisma/models/User";
import { IAuthProvider } from "../../provider/AuthProvider/models/IAuthProvider";
import { IHashProvider } from "../../provider/HashProvider/models/IHashProvider";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  username: string;
  email: string;
  password: string;
  whatsapp: string;
}

@injectable()
class CreateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository,
    @inject("HashProvider")
    private hashProvider: IHashProvider,
    @inject("AuthProvider")
    private authProvider: IAuthProvider
  ) {}

  async execute({
    username,
    email,
    password,
    whatsapp,
  }: IRequest): Promise<User> {
    const userAlreadyExists = await this.usersRepository.findByEmail(email);

    if (userAlreadyExists) {
      throw new AppError("User already exists");
    }

    const passwordHash = await this.hashProvider.geneteHash(password);

    const userAuth = await this.authProvider.auth(username);

    if (!userAuth) {
      throw new AppError("Github information does not found");
    }

    const { name, avatar_url, bio } = userAuth;

    const user = await this.usersRepository.create({
      name,
      username,
      email,
      password: passwordHash,
      avatar: avatar_url,
      bio,
      whatsapp,
    });

    return user;
  }
}

export { CreateUserUseCase };
