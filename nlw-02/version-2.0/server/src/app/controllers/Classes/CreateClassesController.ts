import { Request, Response } from 'express';

import { CreateClassesServices } from 'app/services/Classes/CreateClassesServices';

class CreateClassesController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { cost } = request.body;
    const { subject_id } = request.params;
    const user_id = request.user.id;

    const createClassesServices = new CreateClassesServices();

    const classes = createClassesServices.execute({
      cost,
      user_id,
      subject_id,
    });

    return response.json(classes);
  }
}

export { CreateClassesController };
