import { Class } from "@modules/classes/infra/prisma/models/Class";
import { IClassesRepository } from "@modules/classes/repositories/IClassesRepository";

interface IRequest {
  subject_id: string;
}

class ListAllClassesBySubject {
  constructor(private classesRepository: IClassesRepository) {}

  async execute({ subject_id }: IRequest): Promise<Class[]> {
    const allClasses = await this.classesRepository.listAllClassesBySubject(
      subject_id
    );

    return allClasses;
  }
}

export { ListAllClassesBySubject };
