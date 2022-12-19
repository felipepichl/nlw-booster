import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListAllClasses } from "../../../../useCases/listAllClasses/ListAllClasses";

class ListAllClassesController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listAllClasses = container.resolve(ListAllClasses);

    const classes = await listAllClasses.execute();

    return response.status(200).json(classes);
  }
}

export { ListAllClassesController };
