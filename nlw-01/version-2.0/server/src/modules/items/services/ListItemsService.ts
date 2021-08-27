import { injectable, inject } from 'tsyringe';

import { Item } from '@modules/items/infra/typeorm/entities/Item';
import { IItemsRepository } from '@modules/items/repositories/IItemsRepository';

@injectable()
class ListItemsService {
  constructor(
    @inject('ItemsRepository')
    private itemsRepository: IItemsRepository,
  ) {}

  public async execute(): Promise<Item[]> {
    const items = this.itemsRepository.findAll();

    return items;
  }
}

export { ListItemsService };
