import { Request, Response } from 'express';
import * as Yup from 'yup';

import { AppError } from 'app/error/AppError';
import { CreateUserServices } from '../services/CreateUsersServices';

import userView from '../views/UserView';

class CreateUsersControllers {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { name, email, password, admin } = request.body;

    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string().email().required(),
      password: Yup.string().min(6).required(),
    });

    if (!(await schema.isValid(request.body))) {
      throw new AppError('Validations Failed');
    }

    const createUsersServices = new CreateUserServices();

    const user = await createUsersServices.execute({
      name,
      email,
      password,
      admin,
    });

    return response.json(userView.render(user));
  }
}

export { CreateUsersControllers };
