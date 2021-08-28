import { IPointsRepository } from '@modules/Points/repositories/IPointsRepository';
import { ICreatePointDTO } from '@modules/Points/dtos/ICreatePointDTO';

import { Point } from '../../infra/typeorm/entities/Point';

class FakePointRepository implements IPointsRepository {
  private points: Point[] = [];

  public async create({
    name,
    email,
    whatsapp,
    latitude,
    longitude,
    city,
    uf,
    image,
    items,
  }: ICreatePointDTO): Promise<Point | undefined> {
    const point = new Point();

    Object.assign(point, {
      id: Math.floor(Math.random() * 100),
      name,
      email,
      whatsapp,
      latitude,
      longitude,
      city,
      uf,
      image,
      items,
    });

    this.points.push(point);

    return point;
  }

  public async findOne(id: string): Promise<Point | undefined> {
    const findPoint = this.points.find(point => point.id === Number(id));

    return findPoint;
  }

  public async findAll(): Promise<Point[] | undefined> {
    return this.points;
  }
}

export default FakePointRepository;
