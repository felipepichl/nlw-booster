import IItemsRepository from '@modules/Items/repositories/IItemsRepository';
import ICreateItemDTO from '@modules/Items/dtos/ICreateItemDTO';

import Item from '../../infra/typeorm/entities/Item';

class FakeItemsRepository implements IItemsRepository {
  private items: Item[] = [];

  public async create({
    title,
    path,
  }: ICreateItemDTO): Promise<Item | undefined> {
    const item = new Item();

    Object.assign(item, { id: Math.floor(Math.random() * 100), title, path });

    this.items.push(item);

    return item;
  }

  public async findAll(): Promise<Item[] | undefined> {
    return this.items;
  }

  public async findAllByIds(ids: number[]): Promise<Item[] | undefined> {
    const items = ids.map(id => {
      return this.items.find(item => item.id === id);
    });

    return items;
  }
}

export default FakeItemsRepository;
