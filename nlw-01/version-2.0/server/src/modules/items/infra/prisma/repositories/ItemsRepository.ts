import { PrismaClient } from '@prisma/client';
import { ICreateItemDTO } from '../../../dtos/ICreateItemDTO';
import { IItemsRepository } from '../../../repositories/IItemsRepository';
import { Item } from '../models/Item';

class ItemsRepository implements IItemsRepository {
  prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async create({ title, path }: ICreateItemDTO): Promise<Item> {
    const result = await this.prisma.item.create({
      data: {
        title,
        path,
      },
    });

    return result;
  }

  async findAll(): Promise<Item[]> {
    const result = await this.prisma.item.findMany();

    return result;
  }

  async findAllByIds(ids: string[]): Promise<Item[]> {
    const result = await this.prisma.item.findMany({
      where: { id: { in: ids } },
    });

    return result;
  }
}

export { ItemsRepository };
