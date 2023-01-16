import auth from "@config/auth";
import { sign } from "jsonwebtoken";
import { injectable, inject } from "tsyringe";

import { AppError } from "@shared/errors/AppError";

import { IHashProvider } from "../../provider/HashProvider/models/IHashProvider";
import { IUsersRepository } from "../../repositories/IUsersRepository";

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
class CreateSessionUseCase {
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

    const response: IResponse = {
      user,
      token,
    };

    return response;
  }
}

export { CreateSessionUseCase };
