import "@modules/users/provider";

import { ClassesRepository } from "@modules/classes/infra/prisma/repositories/ClassesRepository";
import { IClassesRepository } from "@modules/classes/repositories/IClassesRepository";
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

container.registerSingleton<IClassesRepository>(
  "ClassesRepository",
  ClassesRepository
);
