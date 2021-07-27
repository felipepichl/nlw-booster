import { Request, Response } from 'express';

import { ListSubjectServices } from 'app/services/Subjects/ListSubjectServices';

class ListSubjectsController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const listSubjectsServices = new ListSubjectServices();

    const subjects = await listSubjectsServices.execute();

    return response.json(subjects);
  }
}

export { ListSubjectsController };
