import { FakeStorageProvider } from '@shared/container/providers/StorageProvider/fakes/FakeStorageProvider';

import { FakePointsRepository } from '../repositories/fakes/FakePointsRepository';

import { CreatePointService } from './CreatePointService';
import { ShowPointService } from './ShowPointService';

let fakePointsRepository: FakePointsRepository;
let fakeStorageProvider: FakeStorageProvider;

let createPointService: CreatePointService;
let showPointService: ShowPointService;

describe('ShowPoint', () => {
  beforeEach(() => {
    fakePointsRepository = new FakePointsRepository();
    fakeStorageProvider = new FakeStorageProvider();

    createPointService = new CreatePointService(
      fakePointsRepository,
      fakeStorageProvider,
    );

    showPointService = new ShowPointService(fakePointsRepository);
  });

  it('should be able to list on a specific point', async () => {
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

    const findPoint = await showPointService.execute({
      id: String(point.id),
    });

    expect(findPoint).toHaveProperty('id');
    expect(point).toEqual(findPoint);
  });
});
