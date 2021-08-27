import { Item } from '../infra/typeorm/entities/Item';
import { ICreateItemDTO } from '../dtos/ICreateItemDTO';

interface IItemsRepository {
  create(date: ICreateItemDTO): Promise<Item | undefined>;
  findAll(): Promise<Item[] | undefined>;
  findAllByIds(ids: number[]): Promise<Item[] | undefined>;
}

export { IItemsRepository };
