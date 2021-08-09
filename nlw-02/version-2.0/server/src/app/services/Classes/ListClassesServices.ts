import { getCustomRepository, Repository } from 'typeorm';

import { Class } from '@entities/Class';
import { ClassesRepository } from 'app/repositories/ClassesRepository';

class ListClassesServices {
  private classRepository: Repository<Class>;

  constructor() {
    this.classRepository = getCustomRepository(ClassesRepository);
  }

  public async execute(): Promise<Class[]> {
    const classes = await this.classRepository.find({
      relations: ['user', 'subject'],
    });

    return classes;
  }
}

export { ListClassesServices };
