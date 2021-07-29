import { Repository, getCustomRepository } from 'typeorm';

import { Class } from '@entities/Class';
import { ClassesRepository } from '../../repositories/ClassesRepository';

interface IRequest {
  cost: number;
  user_id: string;
  subject_id: string;
}

class CreateClassesServices {
  private classesRepository: Repository<Class>;

  constructor() {
    this.classesRepository = getCustomRepository(ClassesRepository);
  }

  public async execute({
    cost,
    user_id,
    subject_id,
  }: IRequest): Promise<Class> {
    const classes = this.classesRepository.create({
      cost,
      user_id,
      subject_id,
    });

    await this.classesRepository.save(classes);

    return classes;
  }
}

export { CreateClassesServices };
