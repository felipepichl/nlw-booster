import { ICreatePointDTO } from '@modules/points/dtos/ICreatePointDTO';
import { IPointsRepository } from '@modules/points/repositories/IPointsRepository';
import { Point } from '../models/Point';

class PointsRepository implements IPointsRepository {
  create(data: ICreatePointDTO): Promise<Point> {
    throw new Error('Method not implemented.');
  }

  findOne(id: string): Promise<Point> {
    throw new Error('Method not implemented.');
  }

  findAll(): Promise<Point[]> {
    throw new Error('Method not implemented.');
  }
}

export { PointsRepository };
