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
    return User.create({
      name: raw.name,
      username: raw.username,
      email: raw.email,
      password: raw.password,
      avatar: raw.avatar,
      bio: raw.bio,
      whatsapp: raw.whatsapp,
      createdAt: raw.createdAt,
      updatedAt: raw.updatedAt,
    });
  }
}

export { UsersMappers };
