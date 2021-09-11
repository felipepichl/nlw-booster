import { injectable, inject } from 'tsyringe';

import { Point } from '@modules/points/infra/typeorm/entities/Point';
import { IPointsRepository } from '@modules/points/repositories/IPointsRepository';

@injectable()
class ListPointsService {
  constructor(
    @inject('PointsRepository')
    private pointsRepository: IPointsRepository,
  ) {}

  public async execute(): Promise<Point[]> {
    const points = this.pointsRepository.findAll();

    return points;
  }
}

export { ListPointsService };
