import { Point } from '../infra/prisma/models/Point';
import { ICreatePointDTO } from '../dtos/ICreatePointDTO';

interface IPointsRepository {
  create(data: ICreatePointDTO): Promise<Point | undefined>;
  findOne(id: string): Promise<Point | undefined>;
  findAll(): Promise<Point[] | undefined>;
}

export { IPointsRepository };
