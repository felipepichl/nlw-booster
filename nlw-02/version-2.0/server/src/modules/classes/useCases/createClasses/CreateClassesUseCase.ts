import { Class } from "@modules/classes/domain/Class";
import { inject, injectable } from "tsyringe";

import { IClassesRepository } from "../../repositories/IClassesRepository";

interface IRequest {
  coast: number;
  subject_id: string;
  user_id: string;
}

@injectable()
class CreateClassesUseCase {
  constructor(
    @inject("ClassesRepository")
    private classesRepository: IClassesRepository
  ) {}

  async execute({ coast, subject_id, user_id }: IRequest): Promise<Class> {
    const classes = Class.create({
      props: {
        coast,
        subject_id,
        user_id,
      },
    });

    await this.classesRepository.create(classes);

    return classes;
  }
}

export { CreateClassesUseCase };
