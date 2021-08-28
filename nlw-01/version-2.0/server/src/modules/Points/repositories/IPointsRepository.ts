import { Point } from '../infra/typeorm/entities/Point';
import { ICreatePointDTO } from '../dtos/ICreatePointDTO';

export default interface IPointsRepository {
  create(data: ICreatePointDTO): Promise<Point | undefined>;
  findOne(id: string): Promise<Point | undefined>;
  findAll(): Promise<Point[] | undefined>;
}
