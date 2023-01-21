import auth from "@config/auth";
import { IHashProvider } from "@modules/users/provider/HashProvider/models/IHashProvider";
import { IUsersRepository } from "@modules/users/repositories/IUsersRepository";
import { sign } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";

import { IUseCase } from "@shared/core/domain/UseCase";
import { AppError } from "@shared/errors/AppError";

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
class CreateSessionUseCase implements IUseCase<IRequest, IResponse> {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository,
    @inject("HashProvider")
    private hashProvider: IHashProvider
  ) {}

  async execute({ email, password }: IRequest): Promise<IResponse> {
    const user = await this.usersRepository.findByEmail(email);

    if (!user) {
      throw new AppError("Incorrect Email/Password combination", 401);
    }

    const passwordHashed = await this.hashProvider.compareHash(
      password,
      user.password
    );

    if (!passwordHashed) {
      throw new AppError("Incorrect Email/Password combination", 401);
    }

    const { secret, expiresIn } = auth.jwt;

    const token = sign({}, secret, {
      subject: user.id.toString(),
      expiresIn,
    });

    return {
      user,
      token,
    };
  }
}

export { CreateSessionUseCase };
