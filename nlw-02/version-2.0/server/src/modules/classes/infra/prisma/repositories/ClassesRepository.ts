import { ICreateClassesDTO } from "@modules/classes/dtos/ICreateClassesDTO";
import { IClassesRepository } from "@modules/classes/repositories/IClassesRepository";

import { prisma } from "@shared/infra/prisma";

import { Class } from "../models/Class";

class ClassesRepository implements IClassesRepository {
  async create({
    cost,
    subject_id,
    user_id,
  }: ICreateClassesDTO): Promise<Class> {
    const result = await prisma.class.create({
      data: {
        cost,
        fk_subject_id: subject_id,
        fk_user_id: user_id,
      },
    });

    return result;
  }
  async listAllClassesBySubject(subject_id: string): Promise<Class[]> {
    const result = await prisma.class.findMany({
      where: { fk_subject_id: subject_id },
    });

    return result;
  }
  async listClasses(): Promise<Class[]> {
    const result = await prisma.class.findMany();

    return result;
  }
}

export { ClassesRepository };
