import { ICreateItemDTO } from '@modules/items/dtos/ICreateItemDTO';
import { Item } from '../infra/typeorm/entities/Item';

interface IItemsRepository {
  create(date: ICreateItemDTO): Promise<Item | undefined>;
  findAll(): Promise<Item[] | undefined>;
  findAllByIds(ids: number[]): Promise<Item[] | undefined>;
}

export { IItemsRepository };
