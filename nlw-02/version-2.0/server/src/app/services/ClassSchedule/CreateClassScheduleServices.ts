import { Repository, getCustomRepository } from 'typeorm';

import { ClassSchedule } from '@entities/ClassSchedule';
import { ClassScheduleRepository } from 'app/repositories/ClassScheduleRepository';

interface IRequest {
  week_day: number;
  from: number;
  to: number;
  class_id: string;
}

class CreateClassScheduleServices {
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
    const classSchedule = this.classScheduleRepository.create({
      week_day,
      to,
      from,
      class_id,
    });

    await this.classScheduleRepository.save(classSchedule);

    return classSchedule;
  }
}

export { CreateClassScheduleServices };
