import { Class } from "@modules/classes/domain/Class";
import { injectable, inject } from "tsyringe";

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
