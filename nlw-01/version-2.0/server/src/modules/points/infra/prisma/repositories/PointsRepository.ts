import { PrismaClient } from '@prisma/client';
import { container } from 'tsyringe';

import { ShowItemsByIdsService } from '@modules/items/services/ShowItemsByIdsService';

import { ICreatePointDTO } from '../../../dtos/ICreatePointDTO';
import { IPointsRepository } from '../../../repositories/IPointsRepository';
import { Point } from '../models/Point';

class PointsRepository implements IPointsRepository {
  prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async create({
    name,
    email,
    whatsapp,
    latitude,
    longitude,
    city,
    uf,
    items,
    image,
    user_id,
  }: ICreatePointDTO): Promise<Point> {
    const ids = items.split(',').map((item: string) => item.trim());

    const showItemsByIdsService = container.resolve(ShowItemsByIdsService);

    const existentsItem = await showItemsByIdsService.execute({ ids });

    const result = await this.prisma.point.create({
      data: {
        name,
        email,
        whatsapp,
        latitude,
        longitude,
        city,
        uf,
        image,
        fk_user_id: user_id,

        point_items: {
          connect: existentsItem,
        },
      },
    });

    return result;
  }

  findOne(id: string): Promise<Point> {
    throw new Error('Method not implemented.');
  }

  findAll(): Promise<Point[]> {
    throw new Error('Method not implemented.');
  }
}

export { PointsRepository };
