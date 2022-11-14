import { container } from 'tsyringe';

import './providers';

import { IItemsRepository } from '@modules/items/repositories/IItemsRepository';
import { ItemsRepository } from '@modules/items/infra/prisma/repositories/ItemsRepository';

import { IPointsRepository } from '@modules/points/repositories/IPointsRepository';
import { PointsRepository } from '@modules/points/infra/typeorm/repositories/PointsRepository';

import { IUsersRepository } from '@modules/users/repositories/IUsersRepository';
import { UsersRepository } from '@modules/users/infra/typeorm/repositories/UsersRepository';

container.registerSingleton<IItemsRepository>(
  'ItemsRepository',
  ItemsRepository,
);

container.registerSingleton<IPointsRepository>(
  'PointsRepository',
  PointsRepository,
);

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);
