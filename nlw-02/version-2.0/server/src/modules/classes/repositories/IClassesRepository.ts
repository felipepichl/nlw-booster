import { ICreateClassesDTO } from "../dtos/ICreateClassesDTO";
import { Class } from "../infra/prisma/models/Class";

interface IClassesRepository {
  create(data: ICreateClassesDTO): Promise<Class>;
  listAllClassesBySubject(subject_id: string): Promise<Class[]>;
  listClasses(): Promise<Class[]>;
}

export { IClassesRepository };
