import { Request, Response } from 'express';

import { ListClassScheduleServices } from 'app/services/ClassSchedule/ListClassScheduleServices';
import { classToClass } from 'class-transformer';

class ListClassScheduleController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const filter = request.query;

    const week_day = filter.week_day as string;
    const subject = filter.subject as string;
    const timer = filter.timer as string;

    const listClassScheduleServices = new ListClassScheduleServices();

    const classSchadule = await listClassScheduleServices.execute({
      week_day,
      subject,
      timer,
    });

    return response.json(classToClass(classSchadule));
  }
}

export { ListClassScheduleController };
