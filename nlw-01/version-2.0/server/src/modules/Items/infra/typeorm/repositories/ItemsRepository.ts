import { getRepository, Repository } from 'typeorm';

import IItemsRepository from '@modules/Items/repositories/IItemsRepository';
import ICreateItemDTO from '@modules/Items/dtos/ICreateItemDTO';

import Item from '../entities/Item';

class ItemsRepository implements IItemsRepository {
  private ormRepository: Repository<Item>;

  constructor() {
    this.ormRepository = getRepository(Item);
  }

  public async create(itemData: ICreateItemDTO): Promise<Item | undefined> {
    const item = this.ormRepository.create(itemData);

    await this.ormRepository.save(item);

    return item;
  }

  public async findAll(): Promise<Item[] | undefined> {
    const items = await this.ormRepository.find();

    return items;
  }
}

export default ItemsRepository;
