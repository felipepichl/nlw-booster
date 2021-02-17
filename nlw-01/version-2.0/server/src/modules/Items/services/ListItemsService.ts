import { injectable, inject } from 'tsyringe';

import Item from '@modules/Items/infra/typeorm/entities/Item';
import IItemsRepository from '@modules/Items/repositories/IItemsRepository';

@injectable()
class ListItemService {
  constructor(
    @inject('ItemsRepository')
    private itemsRepository: IItemsRepository,
  ) {}

  public async execute(): Promise<Item[]> {
    const items = this.itemsRepository.findAll();

    return items;
  }
}

export default ListItemService;
