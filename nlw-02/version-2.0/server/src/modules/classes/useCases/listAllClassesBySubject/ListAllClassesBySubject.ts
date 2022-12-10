import { Class } from "@modules/classes/infra/prisma/models/Class";
import { IClassesRepository } from "@modules/classes/repositories/IClassesRepository";

class ListAllClassesBySubject {
  constructor(private classesRepository: IClassesRepository) {}

  async execute(subject_id: string): Promise<Class> {}
}

export { ListAllClassesBySubject };
