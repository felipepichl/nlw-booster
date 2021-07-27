import { Repository, getCustomRepository } from 'typeorm';

import { Subject } from '@entities/Subject';
import { SubjectsRepository } from 'app/repositories/SubjectsRepository';

class ListSubjectServices {
  private subjectRepository: Repository<Subject>;

  constructor() {
    this.subjectRepository = getCustomRepository(SubjectsRepository);
  }

  public async execute(): Promise<Subject[]> {
    const subjetcs = this.subjectRepository.find();

    return subjetcs;
  }
}

export { ListSubjectServices };
