import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateSubjectUseCase } from '../../../useCases/createSubjects/CreateSubjectUseCase';

class CreateSubjectsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { title } = request.body;

    const createSubjectUseCase = container.resolve(CreateSubjectUseCase);

    const subject = await createSubjectUseCase.execute({
      title,
    });

    return response.json(subject);
  }
}

export { CreateSubjectsController };
