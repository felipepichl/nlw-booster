import { FakeStorageProvider } from '@shared/container/providers/StorageProvider/fakes/FakeStorageProvider';

import { FakePointsRepository } from '../repositories/fakes/FakePointsRepository';

import { CreatePointService } from './CreatePointService';
import { ListPointsService } from './ListPointsService';

describe('ListPoints', () => {
  it('should be able to list all points', async () => {
    const fakePointsRepository = new FakePointsRepository();
    const fakeStorageProvider = new FakeStorageProvider();

    const createPointService = new CreatePointService(
      fakePointsRepository,
      fakeStorageProvider,
    );

    const listPointsService = new ListPointsService(fakePointsRepository);

    const point = await createPointService.execute({
      name: 'Name Test',
      email: 'point@exemple.com',
      whatsapp: '99999-9999',
      latitude: -30.1084026,
      longitude: -51.3173264,
      city: 'City Test',
      uf: 'TS',
      image: 'image-path',
      items: '1,2',
    });

    const points = await listPointsService.execute();

    expect(point).toHaveProperty('id');
    expect(points).toContainEqual(point);
  });
});
