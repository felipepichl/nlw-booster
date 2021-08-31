import { injectable, inject } from 'tsyringe';

import { Point } from '@modules/Points/infra/typeorm/entities/Point';
import { IPointsRepository } from '@modules/Points/repositories/IPointsRepository';

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
