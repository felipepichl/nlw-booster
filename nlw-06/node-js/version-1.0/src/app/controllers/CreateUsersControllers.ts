import { Request, Response } from 'express';
import { AppError } from 'app/error/AppError';
import * as Yup from 'yup';

import { CreateUserServices } from '../services/CreateUsersServices';

class CreateUsersControllers {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { name, email, password, admin } = request.body;

    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string().email().required(),
    });

    if (!(await schema.isValid(request.body))) {
      throw new AppError('Validations Failed');
    }

    const usersServices = new CreateUserServices();

    const user = await usersServices.execute({
      name,
      email,
      password,
      admin,
    });

    return response.json(user);
  }
}

export { CreateUsersControllers };
