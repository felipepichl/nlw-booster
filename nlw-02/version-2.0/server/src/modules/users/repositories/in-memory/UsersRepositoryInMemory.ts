import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { User } from "../../infra/prisma/models/User";
import { IUsersRepository } from "../IUsersRepository";

class UsersRepositoryInMemory implements IUsersRepository {
  users: User[] = [];

  async create({
    username,
    email,
    password,
    whatsapp,
  }: ICreateUserDTO): Promise<User> {
    const user = new User();

    Object.assign(user, { username, email, password, whatsapp });

    this.users.push(user);

    return user;
  }

  async findByEmail(email: string): Promise<User> {
    return this.users.find((user) => user.email === email);
  }
}

export { UsersRepositoryInMemory };
