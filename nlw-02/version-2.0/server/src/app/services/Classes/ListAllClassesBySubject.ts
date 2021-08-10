import { getCustomRepository, Repository } from 'typeorm';

import { Class } from '@entities/Class';
import { ClassesRepository } from 'app/repositories/ClassesRepository';

interface IRequest {
  subject: string;
}

class ListAllClassesBySubject {
  private classRepository: Repository<Class>;

  constructor() {
    this.classRepository = getCustomRepository(ClassesRepository);
  }

  public async execute({ subject }: IRequest): Promise<Class[]> {
    const allClasses = await this.classRepository.find();

    const allClassesWithSubject = allClasses.filter(
      classes => classes.subject.title === subject,
    );

    return allClassesWithSubject;
  }
}

export { ListAllClassesBySubject };
