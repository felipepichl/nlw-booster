import { Request, Response } from 'express';

import { ListClassesServices } from 'app/services/Classes/ListClassesServices';

class ListClassesController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const listClassesServices = new ListClassesServices();

    const classes = await listClassesServices.execute();

    return response.json(classes);
  }
}

export { ListClassesController };
