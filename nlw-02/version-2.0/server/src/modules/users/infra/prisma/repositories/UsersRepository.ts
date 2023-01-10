import { User } from "@modules/users/domain/User";
import { IUsersRepository } from "@modules/users/repositories/IUsersRepository";

import { prisma } from "@shared/infra/prisma";

import { UsersMappers } from "../mappers/UsersMappers";

class UsersRepository implements IUsersRepository {
  async create(user: User): Promise<void> {
    const raw = UsersMappers.toPrisma(user);

    await prisma.user.create({
      data: raw,
    });
  }

  async findByEmail(email: string): Promise<User> {
    const result = await prisma.user.findFirst({
      where: { email },
    });

    return UsersMappers.toDomain(result);
  }
}

export { UsersRepository };
