import Point from '../infra/typeorm/entities/Point';
import ICreatePointsDTO from '../dtos/ICreatePointDTO';

export default interface IPointsRepository {
  create(data: ICreatePointsDTO): Promise<Point | undefined>;
  findOne(id: string): Promise<Point | undefined>;
  findAll(): Promise<Point[] | undefined>;
}
