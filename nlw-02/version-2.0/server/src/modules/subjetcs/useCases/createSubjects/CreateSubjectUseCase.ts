import { ISubjetcsRepository } from '../../repositories/ISubjetcsRepository';
import { Subject } from '../../infra/prisma/models/Subject';

interface IRequest {
  title: string;
}

class CreateSubjectUseCase {
  constructor(private subjectsRepository: ISubjetcsRepository) {}

  async execute({ title }: IRequest): Promise<Subject> {
    const subject = await this.subjectsRepository.create({
      title,
    });

    return subject;
  }
}

export { CreateSubjectUseCase };
