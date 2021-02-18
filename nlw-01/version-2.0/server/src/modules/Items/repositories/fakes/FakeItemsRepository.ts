import IItemsRepository from '@modules/Items/repositories/IItemsRepository';
import ICreateItemDTO from '@modules/Items/dtos/ICreateItemDTO';

import Item from '../../infra/typeorm/entities/Item';

class FakeItemsRepository implements IItemsRepository {
  private items: Item[] = [];

  public async create(itemData: ICreateItemDTO): Promise<Item | undefined> {
    const item = new Item();

    Object.assign(item, { itemData });

    this.items.push(item);

    return item;
  }

  public async findAll(): Promise<Item[] | undefined> {
    return items;
  }

  public async findAllByIds(ids: number[]): Promise<Item[] | undefined> {
    return items;
  }
}

export default FakeItemsRepository;
