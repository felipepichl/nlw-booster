import FakeItemsRepository from '../repositories/fakes/FakeItemsRepository';
import ListItemsService from './ListItemsService';

describe('ListItems', () => {
  it('should be able to list all items', async () => {
    const fakeItemsRepository = new FakeItemsRepository();
    const listItemsService = new ListItemsService(fakeItemsRepository);

    const items = await listItemsService.execute();
  });
});
