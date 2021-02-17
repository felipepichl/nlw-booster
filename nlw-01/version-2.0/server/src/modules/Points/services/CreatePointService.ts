import { injectable, inject } from 'tsyringe';

import Point from '@modules/Points/infra/typeorm/entities/Point';
import IPointsRepository from '@modules/Points/repositories/IPointsRepository';

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
class CreatePointServices {
  constructor(
    @inject('PointsRepository')
    private pointsRepository: IPointsRepository,
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
    const data = {
      name,
      email,
      whatsapp,
      latitude,
      longitude,
      city,
      uf,
      image,
      items,
    };

    const point = this.pointsRepository.create(data);

    return point;
  }
}

export default CreatePointServices;
