import { inject, injectable } from 'tsyringe';

import { ISubjetcsRepository } from '../../repositories/ISubjetcsRepository';
import { Subject } from '../../infra/prisma/models/Subject';

@injectable()
class ListSubjectsUseCase {
  constructor(
    @inject('SubjectsRepository')
    private subjectsRepository: ISubjetcsRepository,
  ) {}

  async execute(): Promise<Subject[]> {
    return this.subjectsRepository.list();
  }
}

export { ListSubjectsUseCase };
