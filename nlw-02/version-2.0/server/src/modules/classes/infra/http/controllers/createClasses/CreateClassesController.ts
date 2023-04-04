import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateClassesUseCase } from "../../../../useCases/createClasses/CreateClassesUseCase";

class CreateClassesController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { coast, subject_id } = request.body;
    const { id: user_id } = request.user;

    const createClassesUseCase = container.resolve(CreateClassesUseCase);

    const classes = await createClassesUseCase.execute({
      coast,
      subject_id,
      user_id,
    });

    return response.status(201).json(classes);
  }
}

export { CreateClassesController };
