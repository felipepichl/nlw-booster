import { getRepository, Repository, In } from 'typeorm';

import { IItemsRepository } from '@modules/items/repositories/IItemsRepository';
import { ICreateItemDTO } from '@modules/items/dtos/ICreateItemDTO';

import { Item } from '../entities/Item';

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

  public async findAllByIds(ids: number[]): Promise<Item[] | undefined> {
    const items = await this.ormRepository.find({
      where: {
        id: In(ids),
      },
    });

    return items;
  }
}

export { ItemsRepository };
