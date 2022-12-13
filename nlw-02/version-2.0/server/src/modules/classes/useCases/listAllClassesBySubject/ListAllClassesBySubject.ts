import { Class } from "@modules/classes/infra/prisma/models/Class";
import { IClassesRepository } from "@modules/classes/repositories/IClassesRepository";
import { ISubjetcsRepository } from "@modules/subjetcs/repositories/ISubjetcsRepository";

import { AppError } from "@shared/errors/AppError";

interface IRequest {
  subject_id: string;
}

class ListAllClassesBySubject {
  constructor(
    private classesRepository: IClassesRepository,
    private subjectsRepository: ISubjetcsRepository
  ) {}

  async execute({ subject_id }: IRequest): Promise<Class[]> {
    const subjectAlreadyExists = await this.subjectsRepository.listById(
      subject_id
    );

    if (!subjectAlreadyExists) {
      throw new AppError("Subject does not exists");
    }

    const allClasses = await this.classesRepository.listAllClassesBySubject(
      subject_id
    );

    return allClasses;
  }
}

export { ListAllClassesBySubject };
