import { Request, Response } from 'express';

class ListClassScheduleController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const class_id = request.params;
    const filter = request.query;

    const week_day = filter.week_day as string;

    return response.json({ message: 'Doing Services' });
  }
}

export { ListClassScheduleController };
