import { Class } from "@modules/classes/domain/Class";

interface IClassesRepository {
  create(classes: Class): Promise<Class>;
  listAllClassesBySubject(subject_id: string): Promise<Class[]>;
  listAllClassesBySubjectTitle(subject_title: string): Promise<Class[]>;
  listClasses(): Promise<Class[]>;
}

export { IClassesRepository };
