import { inject, injectable } from "tsyringe";

import { Subject } from "../../infra/prisma/models/Subject";
import { ISubjetcsRepository } from "../../repositories/ISubjetcsRepository";

@injectable()
class ListSubjectsUseCase {
  constructor(
    @inject("SubjectsRepository")
    private subjectsRepository: ISubjetcsRepository
  ) {}

  async execute(): Promise<Subject[]> {
    return this.subjectsRepository.list();
  }
}

export { ListSubjectsUseCase };
