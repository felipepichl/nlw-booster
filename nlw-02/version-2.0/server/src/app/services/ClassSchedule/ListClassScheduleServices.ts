import {
  getCustomRepository,
  Repository,
  In,
  LessThanOrEqual,
  MoreThan,
} from 'typeorm';

// import { AppError } from 'app/error/AppError';

import { ClassSchedule } from '@entities/ClassSchedule';
import { ClassScheduleRepository } from 'app/repositories/ClassScheduleRepository';

import convertHourToMinutes from 'app/utils/convertHourToMinutes';
import { ListAllClassesBySubject } from '../Classes/ListAllClassesBySubject';

interface IRequest {
  week_day: string;
  subject: string;
  timer: string;
}

class ListClassScheduleServices {
  private classScheduleRepository: Repository<ClassSchedule>;

  constructor() {
    this.classScheduleRepository = getCustomRepository(ClassScheduleRepository);
  }

  public async execute({
    week_day,
    subject,
    timer,
  }: IRequest): Promise<ClassSchedule[]> {
    const listAllClassesBySubject = new ListAllClassesBySubject();

    const allClassesWithSubject = await listAllClassesBySubject.execute({
      subject,
    });

    const allClassesIds = allClassesWithSubject.map(classes => classes.id);

    const timesInMinutes = convertHourToMinutes(timer);

    const classSchedule = await this.classScheduleRepository.find({
      where: {
        week_day,
        class_id: In(allClassesIds),
        from: LessThanOrEqual(timesInMinutes),
        to: MoreThan(timesInMinutes),
      },
      relations: ['class'],
    });

    return classSchedule;
  }
}

export { ListClassScheduleServices };
