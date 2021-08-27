import FakeStorageProvider from '@shared/container/providers/StorageProvider/fakes/FakeStorageProvider';

import { FakeItemsRepository } from '../repositories/fakes/FakeItemsRepository';

import { CreateItemService } from './CreateItemService';
import { ListItemsService } from './ListItemsService';

describe('ListItems', () => {
  it('should be able to list all items', async () => {
    const fakeItemsRepository = new FakeItemsRepository();
    const listItemsService = new ListItemsService(fakeItemsRepository);

    const fakeStorageProvider = new FakeStorageProvider();

    const createItemService = new CreateItemService(
      fakeItemsRepository,
      fakeStorageProvider,
    );

    const item = await createItemService.execute({
      title: 'item-title-test',
      path: 'item-path-test',
    });

    const items = await listItemsService.execute();

    expect(items).toContainEqual(item);
  });
});
