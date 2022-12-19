import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListAllClassesBySubject } from "../../../../useCases/listAllClassesBySubject/ListAllClassesBySubject";

class ListAllClassesBySubjectController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { subject_id } = request.body;

    const listAllClassesBySubject = container.resolve(ListAllClassesBySubject);

    const classes = await listAllClassesBySubject.execute({ subject_id });

    return response.status(200).json(classes);
  }
}

export { ListAllClassesBySubjectController };
