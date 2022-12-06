import "@modules/users/provider";

import { SubjectsRepository } from "@modules/subjetcs/infra/prisma/repositories/SubjectsRepository";
import { ISubjetcsRepository } from "@modules/subjetcs/repositories/ISubjetcsRepository";
import { UsersRepository } from "@modules/users/infra/prisma/repositories/UsersRepository";
import { IUsersRepository } from "@modules/users/repositories/IUsersRepository";
import { container } from "tsyringe";

container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  UsersRepository
);

container.registerSingleton<ISubjetcsRepository>(
  "SubjectsRepository",
  SubjectsRepository
);
