import { container } from 'tsyringe';

import '@modules/users/provider';

import { IUsersRepository } from '@modules/users/repositories/IUsersRepository';
import { UsersRepository } from '@modules/users/infra/prisma/repositories/UsersRepository';

import { ISubjetcsRepository } from '@modules/subjetcs/repositories/ISubjetcsRepository';
import { SubjectsRepository } from '@modules/subjetcs/infra/prisma/repositories/SubjectsRepository';

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);

container.registerSingleton<ISubjetcsRepository>(
  'SubjectsRepository',
  SubjectsRepository,
);
