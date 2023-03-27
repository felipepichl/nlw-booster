import { prisma } from "@shared/infra/prisma";

import { Subject } from "../../../domain/Subject";
import { ISubjetcsRepository } from "../../../repositories/ISubjetcsRepository";

class SubjectsRepository implements ISubjetcsRepository {
  async create(subject: Subject): Promise<Subject> {
    const result = await prisma.subject.create({
      data: {
        title: subject.title,
      },
    });

    return null;
  }

  async list(): Promise<Subject[]> {
    const result = await prisma.subject.findMany();

    return null;
  }

  async listByName(title: string): Promise<Subject> {
    const result = await prisma.subject.findFirst({
      where: { title },
    });

    return null;
  }

  async listById(id: string): Promise<Subject> {
    const result = await prisma.subject.findFirst({
      where: { id },
    });

    return null;
  }
}

export { SubjectsRepository };
