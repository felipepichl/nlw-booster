import { getRepository } from 'typeorm';

import Point from '@models/Point';

interface IRequest {
  id: string;
}

class ShowPointService {
  public async execute({ id }: IRequest): Promise<Point> {
    const pointRepository = getRepository(Point);

    const point = await pointRepository.findOneOrFail(id, {
      relations: ['items'],
    });

    return point;
  }
}

export default ShowPointService;
