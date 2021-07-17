import { Request, Response } from 'express';
import * as Yup from 'yup';

import { classToClass } from 'class-transformer';

import { AppError } from 'app/error/AppError';
import { CreateTagsServices } from 'app/services/CreateTagsServices';

class CreateTagsController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { name } = request.body;

    const schema = Yup.object().shape({
      name: Yup.string().required(),
    });

    if (!(await schema.isValid(request.body))) {
      throw new AppError('Validations Failed');
    }

    const createTagsService = new CreateTagsServices();

    const tag = await createTagsService.execute({
      name,
    });

    return response.json(classToClass(tag));
  }
}

export { CreateTagsController };
