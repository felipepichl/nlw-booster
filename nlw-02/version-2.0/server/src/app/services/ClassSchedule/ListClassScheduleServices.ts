import { getCustomRepository, Repository } from 'typeorm';

import { ClassSchedule } from '@entities/ClassSchedule';
import { ClassScheduleRepository } from 'app/repositories/ClassScheduleRepository';

import { Class } from '@entities/Class';
import { ClassesRepository } from 'app/repositories/ClassesRepository';

import { AppError } from 'app/error/AppError';

interface IRequest {
  week_day: number;
  subject: string;
  timer: string;
}

class ListClassScheduleServices {
  private classesRepository: Repository<Class>;

  private classScheduleRepository: Repository<ClassSchedule>;

  constructor() {
    this.classScheduleRepository = getCustomRepository(ClassScheduleRepository);
    this.classesRepository = getCustomRepository(ClassesRepository);
  }

  public async execute({
    week_day,
    subject,
    timer,
  }: IRequest): Promise<ClassSchedule> {
    const allClasses = await this.classesRepository.find({
      relations: ['subject'],
    });

    const allClassesWithSubjetc = allClasses.filter(
      classes => classes.subject.title === subject,
    );

    const allClassSchedule = await this.classScheduleRepository.find({
      relations: ['class'],
    });

    return classSchedule;
  }
}

export { ListClassScheduleServices };
