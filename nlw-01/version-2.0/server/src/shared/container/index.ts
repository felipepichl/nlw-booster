import { container } from 'tsyringe';

import './providers';

import IItemsRepository from '@modules/Items/repositories/IItemsRepository';
import ItemsRepository from '@modules/Items/infra/typeorm/repositories/ItemsRepository';

import IPointsRepository from '@modules/Points/repositories/IPointsRepository';
import PointsRepository from '@modules/Points/infra/typeorm/repositories/PointsRepository';

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
