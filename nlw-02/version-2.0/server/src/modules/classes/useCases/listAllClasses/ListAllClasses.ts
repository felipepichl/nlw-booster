import { injectable, inject } from "tsyringe";

import { Class } from "../../infra/prisma/models/Class";
import { IClassesRepository } from "../../repositories/IClassesRepository";

@injectable()
class ListAllClasses {
  constructor(
    @inject("ClassesRepository")
    private classesRepository: IClassesRepository
  ) {}

  async execute(): Promise<Class[]> {
    const allClasses = await this.classesRepository.listClasses();

    return allClasses;
  }
}

export { ListAllClasses };
