import { User } from "@modules/users/domain/User";

interface IUsersRepository {
  create(user: User): Promise<User>;
  findByEmail(email: string): Promise<User>;
}

export { IUsersRepository };
