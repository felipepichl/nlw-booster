import { IItemsRepository } from '@modules/items/repositories/IItemsRepository';
import { ICreateItemDTO } from '@modules/items/dtos/ICreateItemDTO';

import { Item } from '../../infra/prisma/models/Item';

class FakeItemsRepository implements IItemsRepository {
  private items: Item[] = [];

  public async create({
    title,
    path,
  }: ICreateItemDTO): Promise<Item | undefined> {
    const item = new Item();

    Object.assign(item, { title, path });

    this.items.push(item);

    return item;
  }

  public async findAll(): Promise<Item[] | undefined> {
    return this.items;
  }

  public async findAllByIds(ids: string[]): Promise<Item[] | undefined> {
    const items = ids.map(id => {
      return this.items.find(item => item.id === id);
    });

    return items;
  }
}

export { FakeItemsRepository };
