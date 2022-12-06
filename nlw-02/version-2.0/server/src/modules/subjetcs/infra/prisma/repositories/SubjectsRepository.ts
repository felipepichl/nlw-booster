import { prisma } from "@shared/infra/prisma";

import { ICreateSubjectDTO } from "../../../dtos/ICreateSubjectDTO";
import { ISubjetcsRepository } from "../../../repositories/ISubjetcsRepository";
import { Subject } from "../models/Subject";

class SubjectsRepository implements ISubjetcsRepository {
  async create({ title }: ICreateSubjectDTO): Promise<Subject> {
    const result = await prisma.subject.create({
      data: {
        title,
      },
    });

    return result;
  }

  async list(): Promise<Subject[]> {
    const result = await prisma.subject.findMany();

    return result;
  }

  async listByName(title: string): Promise<Subject> {
    const result = await prisma.subject.findFirst({
      where: { title },
    });

    return result;
  }
}

export { SubjectsRepository };
