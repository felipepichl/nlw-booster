import { getRepository } from 'typeorm';

import Item from '@models/Item';

class ListItemService {
  public async execute(): Promise<Item[]> {
    const itemRepository = getRepository(Item);

    const items = await itemRepository.find();

    return items;
  }
}

export default ListItemService;
