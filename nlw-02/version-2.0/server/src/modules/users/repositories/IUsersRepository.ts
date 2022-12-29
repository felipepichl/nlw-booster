import { User } from "@modules/users/domain/User";

interface IUsersRepository {
  create(user: User): Promise<void>;
  findByEmail(email: string): Promise<User>;
}

export { IUsersRepository };
