import { User } from "@modules/users/domain/User";
import { User as RawUser } from "@prisma/client";

class UsersMappers {
  static toPrisma({
    name,
    username,
    email,
    password,
    avatar,
    bio,
    whatsapp,
  }: User) {
    return {
      name,
      username,
      email,
      password,
      avatar,
      bio,
      whatsapp,
    };
  }

  static toDomain(raw: RawUser): User {
    return User.create(raw);
  }
}

export { UsersMappers };
