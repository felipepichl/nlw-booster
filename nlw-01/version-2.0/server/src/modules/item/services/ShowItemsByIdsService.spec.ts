import FakeStorageProvider from '@shared/container/providers/StorageProvider/fakes/FakeStorageProvider';

import { FakeItemsRepository } from '../repositories/fakes/FakeItemsRepository';

import { CreateItemService } from './CreateItemService';
import { ShowItemsByIdsService } from './ShowItemsByIdsService';

describe('ShowItemsByIds', () => {
  it('should be able to list all items on a specific ids', async () => {
    const fakeItemsRepository = new FakeItemsRepository();
    const showItemsByIdsService = new ShowItemsByIdsService(
      fakeItemsRepository,
    );

    const fakeStorageProvider = new FakeStorageProvider();

    const createItemService = new CreateItemService(
      fakeItemsRepository,
      fakeStorageProvider,
    );

    const item1 = await createItemService.execute({
      title: 'item-title-test',
      path: 'item-path-test',
    });

    const item2 = await createItemService.execute({
      title: 'item-title-test',
      path: 'item-path-test',
    });

    const ids: number[] = [];

    ids.push(item1.id, item2.id);

    const items = await showItemsByIdsService.execute({ ids });

    expect(items).toContainEqual(item1);
    expect(items).toContainEqual(item2);
  });
});
