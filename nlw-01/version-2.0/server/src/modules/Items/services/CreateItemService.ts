import { injectable, inject } from 'tsyringe';

import Item from '@modules/Items/infra/typeorm/entities/Item';
import IItemsRepository from '@modules/Items/repositories/IItemsRepository';

interface IResquest {
  title: string;
  path: string;
}

@injectable()
class CreateItemService {
  constructor(
    @inject('ItemsRepository')
    private itemsRepository: IItemsRepository,
  ) {}

  public async execute({ title, path }: IResquest): Promise<Item> {
    const item = this.itemsRepository.create({
      title,
      path,
    });

    return item;
  }
}

export default CreateItemService;
