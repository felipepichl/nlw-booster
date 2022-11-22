import { User } from '../infra/prisma/models/User';
import { ICreateUserDTO } from '../dtos/ICreateUserDTO';

interface IUserRepository {
  create(data: ICreateUserDTO): Promise<User>;
  findByEmail(email: string): Promise<User>;
}

export { IUserRepository };
