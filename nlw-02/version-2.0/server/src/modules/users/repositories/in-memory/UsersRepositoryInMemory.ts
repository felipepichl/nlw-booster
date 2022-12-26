import { User } from "@modules/users/domain/User";

import { IUsersRepository } from "../IUsersRepository";

class UsersRepositoryInMemory implements IUsersRepository {
  users: User[] = [];

  async create(user: User): Promise<User> {
    const objectUser = new User(user);

    Object.assign(objectUser);

    this.users.push(objectUser);

    return objectUser;
  }

  async findByEmail(email: string): Promise<User> {
    return this.users.find((user) => user.email === email);
  }
}

export { UsersRepositoryInMemory };
