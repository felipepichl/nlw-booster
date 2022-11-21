import { ICreateUserDTO } from '../dtos/ICreateUserDTO';
import { User } from '../infra/prisma/models/User';

interface IUsersRepository {
  create(data: ICreateUserDTO): Promise<User | undefined>;
  findByEmail(email: string): Promise<User | undefined>;
}

export { IUsersRepository };
