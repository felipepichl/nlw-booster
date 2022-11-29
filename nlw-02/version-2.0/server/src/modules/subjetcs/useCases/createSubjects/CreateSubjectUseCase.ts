import { AppError } from '@shared/errors/AppError';

import { ISubjetcsRepository } from '../../repositories/ISubjetcsRepository';
import { Subject } from '../../infra/prisma/models/Subject';

interface IRequest {
  title: string;
}

class CreateSubjectUseCase {
  constructor(private subjectsRepository: ISubjetcsRepository) {}

  async execute({ title }: IRequest): Promise<Subject> {
    const subjectAlreadyExists = await this.subjectsRepository.listByName(
      title,
    );

    if (subjectAlreadyExists) {
      throw new AppError('Subject already exists');
    }

    const subject = await this.subjectsRepository.create({
      title,
    });

    return subject;
  }
}

export { CreateSubjectUseCase };
