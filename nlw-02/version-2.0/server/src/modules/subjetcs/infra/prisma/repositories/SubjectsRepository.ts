import { prisma } from "@shared/infra/prisma";

import { Subject } from "../../../domain/Subject";
import { ISubjetcsRepository } from "../../../repositories/ISubjetcsRepository";
import { SubjectsMappers } from "../mappers/SubjetcMapper";

class SubjectsRepository implements ISubjetcsRepository {
  async create(subject: Subject): Promise<Subject> {
    const { props: raw } = SubjectsMappers.toPrisma(subject);

    const result = await prisma.subject.create({
      data: raw,
    });

    return SubjectsMappers.toDomain(result);
  }

  async list(): Promise<Subject[]> {
    const result = await prisma.subject.findMany();

    return SubjectsMappers.toDomain(result);
  }

  async listByName(title: string): Promise<Subject> {
    const result = await prisma.subject.findFirst({
      where: { title },
    });

    return SubjectsMappers.toDomain(result);
  }

  async listById(id: string): Promise<Subject> {
    const result = await prisma.subject.findFirst({
      where: { id },
    });

    return SubjectsMappers.toDomain(result);
  }
}

export { SubjectsRepository };
