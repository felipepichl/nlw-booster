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
    createdAt,
    updatedAt,
  }: User) {
    return {
      name,
      username,
      email,
      password,
      avatar,
      bio,
      whatsapp,
      createdAt,
      updatedAt,
    };
  }

  static toDomain(raw: RawUser): User {
    return new User({
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
