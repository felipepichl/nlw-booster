import { injectable, inject } from 'tsyringe';

import { Item } from '@modules/items/infra/prisma/models/Item';
import { IItemsRepository } from '@modules/items/repositories/IItemsRepository';

interface IResquest {
  ids: string[];
}

@injectable()
class ShowItemsByIdsService {
  constructor(
    @inject('ItemsRepository')
    private itemsRepository: IItemsRepository,
  ) {}

  public async execute({ ids }: IResquest): Promise<Item[]> {
    const items = this.itemsRepository.findAllByIds(ids);

    return items;
  }
}

export { ShowItemsByIdsService };
