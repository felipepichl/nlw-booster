import { Repository, getCustomRepository } from 'typeorm';

import { ClassSchedule } from '@entities/ClassSchedule';
import { ClassScheduleRepository } from 'app/repositories/ClassScheduleRepository';

import convertHourToMinutes from '../../utils/convertHourToMinutes';

interface IRequest {
  scheduleItem: {
    week_day: number;
    from: number;
    to: number;
  }[];
  class_id: string;
}

class CreateClassScheduleServices {
  private classScheduleRepository: Repository<ClassSchedule>;

  constructor() {
    this.classScheduleRepository = getCustomRepository(ClassScheduleRepository);
  }

  public async execute({ scheduleItem, class_id }: IRequest): Promise<void> {
    scheduleItem.map(async schedule => {
      const createClassSchedule = this.classScheduleRepository.create({
        week_day: schedule.week_day,
        from: convertHourToMinutes(String(schedule.from)),
        to: convertHourToMinutes(String(schedule.to)),
        class_id,
      });

      await this.classScheduleRepository.save(createClassSchedule);

      return createClassSchedule;
    });
  }
}

export { CreateClassScheduleServices };
