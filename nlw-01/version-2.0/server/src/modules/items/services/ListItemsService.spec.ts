import { FakeStorageProvider } from '@shared/container/providers/StorageProvider/fakes/FakeStorageProvider';

import { FakeItemsRepository } from '../repositories/fakes/FakeItemsRepository';

import { CreateItemService } from './CreateItemService';
import { ListItemsService } from './ListItemsService';

let fakeItemsRepository: FakeItemsRepository;
let fakeStorageProvider: FakeStorageProvider;

let createItemService: CreateItemService;
let listItemsService: ListItemsService;

describe('ListItems', () => {
  beforeEach(() => {
    fakeItemsRepository = new FakeItemsRepository();
    listItemsService = new ListItemsService(fakeItemsRepository);

    fakeStorageProvider = new FakeStorageProvider();

    createItemService = new CreateItemService(
      fakeItemsRepository,
      fakeStorageProvider,
    );
  });

  it('should be able to list all items', async () => {
    const item = await createItemService.execute({
      title: 'item-title-test',
      path: 'item-path-test',
    });

    const items = await listItemsService.execute();

    expect(items).toContainEqual(item);
  });
});
