import { ICreateItemDTO } from '@modules/items/dtos/ICreateItemDTO';
import { Item } from '../infra/prisma/models/Item';

interface IItemsRepository {
  create(date: ICreateItemDTO): Promise<Item | undefined>;
  findAll(): Promise<Item[] | undefined>;
  findAllByIds(ids: string[]): Promise<Item[] | undefined>;
}

export { IItemsRepository };
