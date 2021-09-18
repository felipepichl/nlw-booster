import { injectable, inject } from 'tsyringe';

import { Point } from '@modules/points/infra/typeorm/entities/Point';
import { IPointsRepository } from '@modules/points/repositories/IPointsRepository';

interface IRequest {
  id: string;
}

@injectable()
class ShowPointService {
  constructor(
    @inject('PointsRepository')
    private pointsRepository: IPointsRepository,
  ) {}

  public async execute({ id }: IRequest): Promise<Point> {
    const point = this.pointsRepository.findOne(id);

    return point;
  }
}

export { ShowPointService };