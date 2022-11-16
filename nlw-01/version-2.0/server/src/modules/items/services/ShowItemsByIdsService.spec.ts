import { FakeStorageProvider } from '@shared/container/providers/StorageProvider/fakes/FakeStorageProvider';

import { FakeItemsRepository } from '../repositories/fakes/FakeItemsRepository';

import { CreateItemService } from './CreateItemService';
import { ShowItemsByIdsService } from './ShowItemsByIdsService';

let fakeItemsRepository: FakeItemsRepository;
let fakeStorageProvider: FakeStorageProvider;

let createItemService: CreateItemService;
let showItemsByIdsService: ShowItemsByIdsService;

describe('ShowItemsByIds', () => {
  beforeEach(() => {
    fakeItemsRepository = new FakeItemsRepository();
    showItemsByIdsService = new ShowItemsByIdsService(fakeItemsRepository);

    fakeStorageProvider = new FakeStorageProvider();

    createItemService = new CreateItemService(
      fakeItemsRepository,
      fakeStorageProvider,
    );
  });

  it('should be able to list all items on a specific ids', async () => {
    const item1 = await createItemService.execute({
      title: 'item-title-test',
      path: 'item-path-test',
    });

    const item2 = await createItemService.execute({
      title: 'item-title-test',
      path: 'item-path-test',
    });

    const ids: string[] = [];

    ids.push(item1.id, item2.id);

    const items = await showItemsByIdsService.execute({ ids });

    expect(items).toContainEqual(item1);
    expect(items).toContainEqual(item2);
  });
});
