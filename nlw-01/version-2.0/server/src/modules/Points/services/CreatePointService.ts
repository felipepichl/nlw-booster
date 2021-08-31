import { injectable, inject } from 'tsyringe';

import { Point } from '@modules/Points/infra/typeorm/entities/Point';
import { IPointsRepository } from '@modules/Points/repositories/IPointsRepository';

import IStorageProvider from '@shared/container/providers/StorageProvider/models/IStorageProvider';

interface IRequest {
  name: string;
  email: string;
  whatsapp: string;
  latitude: number;
  longitude: number;
  city: string;
  uf: string;
  items: string;
  image: string;
}

@injectable()
class CreatePointService {
  constructor(
    @inject('PointsRepository')
    private pointsRepository: IPointsRepository,

    @inject('StorageProvider')
    private storageProvider: IStorageProvider,
  ) {}

  public async execute({
    name,
    email,
    whatsapp,
    latitude,
    longitude,
    city,
    uf,
    items,
    image,
  }: IRequest): Promise<Point> {
    const fileName = await this.storageProvider.saveFile(image);

    const data = {
      name,
      email,
      whatsapp,
      latitude,
      longitude,
      city,
      uf,
      image: fileName,
      items,
    };

    const point = this.pointsRepository.create(data);

    return point;
  }
}

export { CreatePointService };
