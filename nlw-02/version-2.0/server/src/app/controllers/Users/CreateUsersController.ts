import { Request, Response } from 'express';
import { AppError } from 'app/error/AppError';
import * as Yup from 'yup';

import { CreateUsersWithGithubServices } from 'app/services/Users/CreateUsersWithGithubServices';

class CreateUsersController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { username, email, password, whatsapp } = request.body;

    const schema = Yup.object().shape({
      username: Yup.string().required(),
      email: Yup.string().email().required(),
      password: Yup.string().email().required(),
      whatsapp: Yup.string().email().required(),
    });

    if (!(await schema.isValid(request.body))) {
      throw new AppError('Validations Failed');
    }

    const createUsersWithGithubServices = new CreateUsersWithGithubServices();

    const user = await createUsersWithGithubServices.execute({
      username,
      email,
      password,
      whatsapp,
    });

    return response.json(user);
  }
}

export { CreateUsersController };
