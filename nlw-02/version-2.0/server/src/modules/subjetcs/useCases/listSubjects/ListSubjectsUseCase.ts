import { inject, injectable } from "tsyringe";

import { IUseCase } from "@shared/core/domain/UseCase";

import { Subject } from "../../domain/Subject";
import { ISubjetcsRepository } from "../../repositories/ISubjetcsRepository";

interface IResponse {
  subjects: Subject[];
}

@injectable()
class ListSubjectsUseCase implements IUseCase<void, IResponse> {
  constructor(
    @inject("SubjectsRepository")
    private subjectsRepository: ISubjetcsRepository
  ) {}
  async execute(): Promise<IResponse> {
    const subjects = await this.subjectsRepository.list();

    return { subjects };
  }
}

export { ListSubjectsUseCase };
