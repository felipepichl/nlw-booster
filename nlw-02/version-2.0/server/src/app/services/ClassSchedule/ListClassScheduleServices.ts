import { getCustomRepository, Repository } from 'typeorm';

import { ClassSchedule } from '@entities/ClassSchedule';
import { ClassScheduleRepository } from 'app/repositories/ClassScheduleRepository';
import { AppError } from 'app/error/AppError';

interface IRequest {
  week_day: number;
  from: number;
  to: number;
  class_id: string;
}

class ListClassScheduleServices {
  private classScheduleRepository: Repository<ClassSchedule>;

  constructor() {
    this.classScheduleRepository = getCustomRepository(ClassScheduleRepository);
  }

  public async execute({
    week_day,
    from,
    to,
    class_id,
  }: IRequest): Promise<ClassSchedule> {
    const classSchedule = await this.classScheduleRepository.findOne({
      where: { class_id, week_day, from, to },
      relations: ['class'],
    });

    if (!classSchedule) {
      throw new AppError('Class Schedule does not found');
    }

    return classSchedule;
  }
}

export { ListClassScheduleServices };
