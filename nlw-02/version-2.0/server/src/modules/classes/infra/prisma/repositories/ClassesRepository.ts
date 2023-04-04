import { Class } from "@modules/classes/domain/Class";
import { IClassesRepository } from "@modules/classes/repositories/IClassesRepository";

import { prisma } from "@shared/infra/prisma";

class ClassesRepository implements IClassesRepository {
  async create(classes: Class): Promise<Class> {
    const result = await prisma.class.create({
      data: {
        coast,
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
  async listAllClassesBySubjectTitle(subject_title: string): Promise<Class[]> {
    const result = await prisma.class.findMany({
      where: {
        subject: {
          title: subject_title,
        },
      },
    });

    return result;
  }
  async listClasses(): Promise<Class[]> {
    const result = await prisma.class.findMany();

    return result;
  }
}

export { ClassesRepository };
