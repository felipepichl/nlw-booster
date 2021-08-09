import { Repository, getCustomRepository } from 'typeorm';

import { AppError } from 'app/error/AppError';

import { Subject } from '@entities/Subject';
import { SubjectsRepository } from '../../repositories/SubjectsRepository';

interface IRequest {
  title: string;
}

class CreateSubjectsServices {
  private subjectRepository: Repository<Subject>;

  constructor() {
    this.subjectRepository = getCustomRepository(SubjectsRepository);
  }

  public async execute({ title }: IRequest): Promise<Subject> {
    const subjectAllReadyExists = await this.subjectRepository.findOne({
      title,
    });

    if (subjectAllReadyExists) {
      throw new AppError('Subject already exists');
    }

    const subject = this.subjectRepository.create({
      title,
    });

    await this.subjectRepository.save(subject);

    return subject;
  }
}

export { CreateSubjectsServices };
