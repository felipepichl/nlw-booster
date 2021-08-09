import { Request, Response } from 'express';

import { CreateClassScheduleServices } from 'app/services/ClassSchedule/CreateClassScheduleServices';

class CreateClassScheduleController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { class_id, schedule } = request.body;

    const createClassScheduleServices = new CreateClassScheduleServices();

    createClassScheduleServices.execute({
      class_id,
      scheduleItem: schedule,
    });

    return response.json().status(201);
  }
}

export { CreateClassScheduleController };
