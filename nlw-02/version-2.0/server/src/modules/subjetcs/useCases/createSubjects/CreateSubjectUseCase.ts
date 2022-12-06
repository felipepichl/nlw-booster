import { inject, injectable } from "tsyringe";

import { AppError } from "@shared/errors/AppError";

import { Subject } from "../../infra/prisma/models/Subject";
import { ISubjetcsRepository } from "../../repositories/ISubjetcsRepository";

interface IRequest {
  title: string;
}

@injectable()
class CreateSubjectUseCase {
  constructor(
    @inject("SubjectsRepository")
    private subjectsRepository: ISubjetcsRepository
  ) {}

  async execute({ title }: IRequest): Promise<Subject> {
    const subjectAlreadyExists = await this.subjectsRepository.listByName(
      title
    );

    if (subjectAlreadyExists) {
      throw new AppError("Subject already exists");
    }

    const subject = await this.subjectsRepository.create({
      title,
    });

    return subject;
  }
}

export { CreateSubjectUseCase };
