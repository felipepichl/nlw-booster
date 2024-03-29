import { injectable, inject } from 'tsyringe';

import { Item } from '@modules/items/infra/prisma/models/Item';
import { IItemsRepository } from '@modules/items/repositories/IItemsRepository';

import { IStorageProvider } from '@shared/container/providers/StorageProvider/models/IStorageProvider';

interface IResquest {
  title: string;
  path: string;
}

@injectable()
class CreateItemService {
  constructor(
    @inject('ItemsRepository')
    private itemsRepository: IItemsRepository,

    @inject('StorageProvider')
    private storageProvider: IStorageProvider,
  ) {}

  public async execute({ title, path }: IResquest): Promise<Item> {
    const fileName = await this.storageProvider.saveFileItem(path);

    const item = this.itemsRepository.create({
      title,
      path: fileName,
    });

    return item;
  }
}

export { CreateItemService };
