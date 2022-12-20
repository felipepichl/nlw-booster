import { ICreateClassesDTO } from "@modules/classes/dtos/ICreateClassesDTO";
import { Class } from "@modules/classes/infra/prisma/models/Class";

import { IClassesRepository } from "../IClassesRepository";

class ClassesRepositoryInMemory implements IClassesRepository {
  private classes: Class[] = [];

  async create({
    cost,
    subject_id,
    user_id,
  }: ICreateClassesDTO): Promise<Class> {
    const objectClass = new Class();

    Object.assign(objectClass, {
      cost,
      fk_subject_id: subject_id,
      fk_user_id: user_id,
    });

    this.classes.push(objectClass);

    return objectClass;
  }

  async listAllClassesBySubject(subject_id: string): Promise<Class[]> {
    return this.classes.filter(
      (objectClass) => objectClass.fk_subject_id === subject_id
    );
  }

  async listAllClassesBySubjectTitle(subject_title: string): Promise<Class[]> {
    return this.classes.filter(
      (objectClass) => objectClass.subject.title === subject_title
    );
  }

  async listClasses(): Promise<Class[]> {
    return this.classes;
  }
}

export { ClassesRepositoryInMemory };
