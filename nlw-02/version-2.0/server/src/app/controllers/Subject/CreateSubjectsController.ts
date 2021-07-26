import { Request, Response } from 'express';

import { CreateSubjectsServices } from 'app/services/Subjects/CreateSubjectsServices';

class CreateSubjectsController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { title } = request.body;

    const createSubjectServices = new CreateSubjectsServices();

    const subject = await createSubjectServices.execute({
      title,
    });

    return response.json(subject);
  }
}

export { CreateSubjectsController };
