import { Request, Response } from 'express';

import { CreateClassScheduleServices } from 'app/services/ClassSchedule/CreateClassScheduleServices';

class CreateClassScheduleController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { class_id } = request.params;
    const { week_day, from, to } = request.query;

    const createClassScheduleServices = new CreateClassScheduleServices();

    const classSchedule = await createClassScheduleServices.execute({
      week_day: Number(week_day),
      from: Number(from),
      to: Number(to),
      class_id,
    });

    return response.json(classSchedule);
  }
}

export { CreateClassScheduleController };
