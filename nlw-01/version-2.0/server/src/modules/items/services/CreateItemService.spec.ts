import { FakeStorageProvider } from '@shared/container/providers/StorageProvider/fakes/FakeStorageProvider';

import { FakeItemsRepository } from '../repositories/fakes/FakeItemsRepository';
import { CreateItemService } from './CreateItemService';

describe('CreateItem', () => {
  it('should be able to create a new item', async () => {
    const fakeItemsRepository = new FakeItemsRepository();
    const fakeStorageProvider = new FakeStorageProvider();

    const createItemService = new CreateItemService(
      fakeItemsRepository,
      fakeStorageProvider,
    );

    const item = await createItemService.execute({
      title: 'item-title-test',
      path: 'item-path-test',
    });

    expect(item).toHaveProperty('id');
  });
});
