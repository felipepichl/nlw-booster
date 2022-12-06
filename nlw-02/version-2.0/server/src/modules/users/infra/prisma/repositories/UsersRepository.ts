import { ICreateUserDTO } from "@modules/users/dtos/ICreateUserDTO";
import { IUsersRepository } from "@modules/users/repositories/IUsersRepository";

import { prisma } from "@shared/infra/prisma";

import { User } from "../models/User";

class UsersRepository implements IUsersRepository {
  async create(data: ICreateUserDTO): Promise<User> {
    const result = await prisma.user.create({
      data,
    });

    return result;
  }

  async findByEmail(email: string): Promise<User> {
    const result = await prisma.user.findFirst({
      where: { email },
    });

    return result;
  }
}

export { UsersRepository };
