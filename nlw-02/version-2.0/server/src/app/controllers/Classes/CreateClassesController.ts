import { Request, Response } from 'express';
import { classToClass } from 'class-transformer';

import { CreateClassesServices } from 'app/services/Classes/CreateClassesServices';

class CreateClassesController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { cost, subject_id } = request.body;
    const user_id = request.user.id;

    const createClassesServices = new CreateClassesServices();

    const classes = createClassesServices.execute({
      cost,
      subject_id,
      user_id,
    });

    return response.json(classToClass(classes));
  }
}

export { CreateClassesController };
