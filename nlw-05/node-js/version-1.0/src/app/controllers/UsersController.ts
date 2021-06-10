import { Request, Response } from 'express';
import * as Yup from 'yup';

import { AppError } from 'app/errors/AppError';

import UsersServices from '../services/UsersServices';

class UsersController {
  public async store(request: Request, response: Response): Promise<Response> {
    const { name, email } = request.body;

    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string().email().required(),
    });

    if (!(await schema.isValid(request.body))) {
      throw new AppError('Validations Failed!');
    }

    const user = await UsersServices.execute({ name, email });

    return response.json(user);
  }
}

export { UsersController };
