import { Class } from "@modules/classes/infra/prisma/models/Class";
import { IClassesRepository } from "@modules/classes/repositories/IClassesRepository";

class ListAllClasses {
  constructor(private classesRepository: IClassesRepository) {}

  async execute(): Promise<Class[]> {
    return null;
  }
}

export { ListAllClasses };
