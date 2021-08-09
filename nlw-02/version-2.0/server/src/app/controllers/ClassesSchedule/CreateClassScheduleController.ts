import { Request, Response } from 'express';

import { CreateClassScheduleServices } from 'app/services/ClassSchedule/CreateClassScheduleServices';

import convertHourToMinutes from '../../utils/convertHourToMinutes';

interface ScheduleItem {
  week_day: number;
  from: string;
  to: string;
}

class CreateClassScheduleController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { class_id, schedule } = request.body;

    const createClassScheduleServices = new CreateClassScheduleServices();

    const createClassSchedule = schedule.map((scheduleItem: ScheduleItem) => {
      return {
        week_day: scheduleItem.week_day,
        from: convertHourToMinutes(scheduleItem.from),
        to: convertHourToMinutes(scheduleItem.to),
        class_id,
      };
    });

    const classSchedule = await createClassScheduleServices.execute(
      createClassSchedule,
    );

    return response.json(classSchedule);
  }
}

export { CreateClassScheduleController };
