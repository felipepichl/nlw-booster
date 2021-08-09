import { Repository, getCustomRepository } from 'typeorm';

import { Class } from '@entities/Class';
import { ClassesRepository } from '../../repositories/ClassesRepository';

interface IRequest {
  cost: number;
  subject_id: string;
  user_id: string;
}

class CreateClassesServices {
  private classesRepository: Repository<Class>;

  constructor() {
    this.classesRepository = getCustomRepository(ClassesRepository);
  }

  public async execute({
    cost,
    subject_id,
    user_id,
  }: IRequest): Promise<Class> {
    const classes = this.classesRepository.create({
      cost,
      subject_id,
      user_id,
    });

    // await this.classesRepository.save(classes);

    return classes;
  }
}

export { CreateClassesServices };
