import { ICreateUserDTO } from '@modules/users/dtos/ICreateUserDTO';
import { IUsersRepository } from '@modules/users/repositories/IUsersRepository';
import { PrismaClient } from '@prisma/client';
import { User } from '../models/User';

class UsersRepository implements IUsersRepository {
  prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async create(data: ICreateUserDTO): Promise<User> {
    const result = await this.prisma.user.create({
      data: {},
    });

    return result;
  }

  findByEmail(email: string): Promise<User> {
    throw new Error('Method not implemented.');
  }
}

export { UsersRepository };
