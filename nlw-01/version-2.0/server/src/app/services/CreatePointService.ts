import { getRepository, In } from 'typeorm';

import Point from '@models/Point';
import Item from '@models/Item';

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

class CreatePointServices {
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
    const pointRepository = getRepository(Point);

    const itemsIds = items
      .split(',')
      .map((item: string) => Number(item.trim()));

    const itemsRepository = getRepository(Item);

    const existentsItem = await itemsRepository.find({
      where: {
        id: In(itemsIds),
      },
    });

    const data = {
      name,
      email,
      whatsapp,
      latitude,
      longitude,
      city,
      uf,
      image,
      items: existentsItem,
    };

    const point = pointRepository.create(data);

    await pointRepository.save(point);

    return point;
  }
}

export default CreatePointServices;
