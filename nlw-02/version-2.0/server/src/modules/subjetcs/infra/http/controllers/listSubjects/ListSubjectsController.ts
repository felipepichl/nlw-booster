import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListSubjectsUseCase } from "../../../../useCases/listSubjects/ListSubjectsUseCase";

class ListSubjectsController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const listSubjectsUseCase = container.resolve(ListSubjectsUseCase);

    const subjects = await listSubjectsUseCase.execute();

    return response.status(200).json(subjects);
  }
}

export { ListSubjectsController };
