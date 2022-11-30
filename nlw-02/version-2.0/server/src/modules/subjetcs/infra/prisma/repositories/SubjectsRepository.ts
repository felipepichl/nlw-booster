import { PrismaClient } from '@prisma/client';

import { Subject } from '../models/Subject';

import { ISubjetcsRepository } from '../../../repositories/ISubjetcsRepository';
import { ICreateSubjectDTO } from '../../../dtos/ICreateSubjectDTO';

class SubjectsRepository implements ISubjetcsRepository {
  prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async create({ title }: ICreateSubjectDTO): Promise<Subject> {
    const result = await this.prisma.subject.create({
      data: {
        title,
      },
    });

    return result;
  }

  async list(): Promise<Subject[]> {
    const result = await this.prisma.subject.findMany();

    return result;
  }

  async listByName(title: string): Promise<Subject> {
    const result = await this.prisma.subject.findFirst({
      where: { title },
    });

    return result;
  }
}

export { SubjectsRepository };
