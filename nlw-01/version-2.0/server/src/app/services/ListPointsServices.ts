import { getRepository } from 'typeorm';

import Point from '@models/Point';

class ListPointsServices {
  public async execute(): Promise<Point[]> {
    const pointRepository = getRepository(Point);

    const points = await pointRepository.find({
      relations: ['items'],
    });

    return points;
  }
}

export default ListPointsServices;
