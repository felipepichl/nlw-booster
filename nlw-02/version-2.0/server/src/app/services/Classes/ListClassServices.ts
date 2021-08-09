import { getCustomRepository, Repository } from 'typeorm';

import { Class } from '@entities/Class';
import { ClassesRepository } from 'app/repositories/ClassesRepository';

class ListClassServices {
  private classRepository: Repository<Class>;

  constructor() {
    this.classRepository = getCustomRepository(ClassesRepository);
  }

  public async execute(): Promise<Class[]> {
    const classes = await this.classRepository.find();

    return classes;
  }
}

export { ListClassServices };
