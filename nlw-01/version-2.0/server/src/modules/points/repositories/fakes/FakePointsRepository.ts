import { IPointsRepository } from '@modules/points/repositories/IPointsRepository';
import { ICreatePointDTO } from '@modules/points/dtos/ICreatePointDTO';

import { Point } from '../../infra/prisma/models/Point';

class FakePointsRepository implements IPointsRepository {
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
    user_id,
  }: ICreatePointDTO): Promise<Point | undefined> {
    const point = new Point();

    Object.assign(point, {
      name,
      email,
      whatsapp,
      latitude,
      longitude,
      city,
      uf,
      image,
      items,
      user_id,
    });

    this.points.push(point);

    return point;
  }

  public async findOne(id: string): Promise<Point | undefined> {
    const findPoint = this.points.find(point => point.id === id);

    return findPoint;
  }

  public async findAll(): Promise<Point[] | undefined> {
    return this.points;
  }
}

export { FakePointsRepository };
