import { Class } from "@modules/classes/domain/Class";

import { IClassesRepository } from "../IClassesRepository";

class ClassesRepositoryInMemory implements IClassesRepository {
  private classes: Class[] = [];

  async create(classes: Class): Promise<Class> {
    this.classes.push(classes);

    return this.classes[0];
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
