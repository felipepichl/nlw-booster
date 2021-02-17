import { getRepository, Repository, In } from 'typeorm';

import IPointsRepository from '@modules/Points/repositories/IPointsRepository';
import ICreatePointDTO from '@modules/Points/dtos/ICreatePointDTO';

import Item from '@modules/Items/infra/typeorm/entities/Item';

import Point from '../entities/Point';

class PointRepository implements IPointsRepository {
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
  }: ICreatePointDTO): Promise<Point | undefined> {
    const itemsIds = items
      .split(',')
      .map((item: string) => Number(item.trim()));

    const itemsRepository = getRepository(Item);

    const existentsItem = await itemsRepository.find({
      where: {
        id: In(itemsIds),
      },
    });

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

export default PointRepository;
