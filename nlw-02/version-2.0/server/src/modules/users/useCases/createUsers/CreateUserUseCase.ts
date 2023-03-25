import { User } from "@modules/users/domain/User";
import { IAuthProvider } from "@modules/users/provider/AuthProvider/models/IAuthProvider";
import { IHashProvider } from "@modules/users/provider/HashProvider/models/IHashProvider";
import { IUsersRepository } from "@modules/users/repositories/IUsersRepository";
import { injectable, inject } from "tsyringe";

import { IUseCase } from "@shared/core/domain/UseCase";
import { AppError } from "@shared/errors/AppError";

interface IRequest {
  username: string;
  email: string;
  password: string;
  whatsapp: string;
}

interface IResponse {
  user: User;
}

@injectable()
class CreateUserUseCase implements IUseCase<IRequest, IResponse> {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository,
    @inject("HashProvider")
    private hashProvider: IHashProvider,
    @inject("AuthProvider")
    private authProvider: IAuthProvider
  ) {}

  async execute(request?: IRequest): Promise<IResponse> {
    const { username, email, password, whatsapp } = request;

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

    const user = User.create({
      props: {
        name,
        username,
        email,
        password: passwordHash,
        avatar: avatar_url,
        bio,
        whatsapp,
      },
    });

    await this.usersRepository.create(user);

    return {
      user,
    };
  }
}

export { CreateUserUseCase };
