import { Request, Response } from 'express';
import { classToClass } from 'class-transformer';

import { ListClassesServices } from 'app/services/Classes/ListClassesServices';

class ListClassesController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const listClassesServices = new ListClassesServices();

    const classes = await listClassesServices.execute();

    return response.json(classToClass(classes));
  }
}

export { ListClassesController };
