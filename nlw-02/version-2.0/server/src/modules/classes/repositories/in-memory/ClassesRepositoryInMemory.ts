import { ICreateClassesDTO } from "@modules/classes/dtos/ICreateClassesDTO";
import { Class } from "@modules/classes/infra/prisma/models/Class";

import { IClassesRepository } from "../IClassesRepository";

class ClassesRepositoryInMemory implements IClassesRepository {
  private classes: Class[] = [];

  async create(data: ICreateClassesDTO): Promise<Class> {
    const objectClass = new Class();

    Object.assign(data, objectClass);

    this.classes.push(objectClass);

    return objectClass;
  }

  async listAllClassesBySubject(subject_id: string): Promise<Class[]> {
    return this.classes.filter(
      (objectClass) => objectClass.fk_subject_id === subject_id
    );
  }

  async listClasses(): Promise<Class[]> {
    return this.classes;
  }
}

export { ClassesRepositoryInMemory };
