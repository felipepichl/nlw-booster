import { PrismaClient } from '@prisma/client';
import { ICreateUserDTO } from '../../../dtos/ICreateUserDTO';
import { IUsersRepository } from '../../../repositories/IUsersRepository';
import { User } from '../models/User';

class UsersRepository implements IUsersRepository {
  prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async create(data: ICreateUserDTO): Promise<User> {
    const result = await this.prisma.user.create({
      data,
    });

    return result;
  }

  async findByEmail(email: string): Promise<User> {
    const result = await this.prisma.user.findUnique({
      where: { email },
    });

    return result;
  }
}

export { UsersRepository };
