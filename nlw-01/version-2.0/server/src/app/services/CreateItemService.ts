import { getRepository } from 'typeorm';

import Item from '@models/Item';

interface IResquest {
  title: string;
  path: string;
}

class CreateItemService {
  public async execute({ title, path }: IResquest): Promise<Item> {
    const itemRepository = getRepository(Item);

    const item = itemRepository.create({
      title,
      path,
    });

    await itemRepository.save(item);

    return item;
  }
}

export default CreateItemService;
