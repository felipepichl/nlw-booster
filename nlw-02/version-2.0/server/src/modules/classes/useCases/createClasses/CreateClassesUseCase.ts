import { inject, injectable } from "tsyringe";

import { Class } from "../../infra/prisma/models/Class";
import { IClassesRepository } from "../../repositories/IClassesRepository";

interface IRequest {
  cost: number;
  subject_id: string;
  user_id: string;
}

@injectable()
class CreateClassesUseCase {
  constructor(
    @inject("ClassesRepository")
    private classesRepository: IClassesRepository
  ) {}

  async execute({ cost, subject_id, user_id }: IRequest): Promise<Class> {
    const classes = await this.classesRepository.create({
      cost,
      subject_id,
      user_id,
    });

    return classes;
  }
}

export { CreateClassesUseCase };
