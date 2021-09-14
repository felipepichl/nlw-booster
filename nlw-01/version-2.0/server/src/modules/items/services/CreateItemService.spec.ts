import { FakeStorageProvider } from '@shared/container/providers/StorageProvider/fakes/FakeStorageProvider';

import { FakeItemsRepository } from '../repositories/fakes/FakeItemsRepository';
import { CreateItemService } from './CreateItemService';

let fakeItemsRepository: FakeItemsRepository;
let fakeStorageProvider: FakeStorageProvider;

let createItemService: CreateItemService;

describe('CreateItem', () => {
  beforeEach(() => {
    fakeItemsRepository = new FakeItemsRepository();
    fakeStorageProvider = new FakeStorageProvider();

    createItemService = new CreateItemService(
      fakeItemsRepository,
      fakeStorageProvider,
    );
  });

  it('should be able to create a new item', async () => {
    const item = await createItemService.execute({
      title: 'item-title-test',
      path: 'item-path-test',
    });

    expect(item).toHaveProperty('id');
  });
});
