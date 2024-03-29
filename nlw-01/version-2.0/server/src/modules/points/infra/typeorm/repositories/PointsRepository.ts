import { getRepository, Repository } from 'typeorm';
import { container } from 'tsyringe';

import { IPointsRepository } from '@modules/points/repositories/IPointsRepository';
import { ICreatePointDTO } from '@modules/points/dtos/ICreatePointDTO';

import { ShowItemsByIdsService } from '@modules/items/services/ShowItemsByIdsService';

import { Point } from '../entities/Point';

class PointsRepository implements IPointsRepository {
  private ormRepository: Repository<Point>;

  constructor() {
    this.ormRepository = getRepository(Point);
  }

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
    const ids = items.split(',').map((item: string) => Number(item.trim()));

    const showItemsByIdsService = container.resolve(ShowItemsByIdsService);

    const existentsItem = await showItemsByIdsService.execute({ ids });

    const data = {
      name,
      email,
      whatsapp,
      latitude,
      longitude,
      city,
      uf,
      image,
      items: existentsItem,
      user_id,
    };

    const point = this.ormRepository.create(data);

    await this.ormRepository.save(point);

    return point;
  }

  public async findOne(id: string): Promise<Point | undefined> {
    const point = await this.ormRepository.findOneOrFail(id, {
      relations: ['items'],
    });

    return point;
  }

  public async findAll(): Promise<Point[] | undefined> {
    const points = await this.ormRepository.find({
      relations: ['items'],
    });

    return points;
  }
}

export { PointsRepository };
