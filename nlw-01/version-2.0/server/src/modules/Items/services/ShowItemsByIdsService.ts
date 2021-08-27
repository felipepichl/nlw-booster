import { injectable, inject } from 'tsyringe';

import { Item } from '@modules/Items/infra/typeorm/entities/Item';
import { IItemsRepository } from '@modules/Items/repositories/IItemsRepository';

interface IResquest {
  ids: number[];
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

export default ShowItemsByIdsService;
