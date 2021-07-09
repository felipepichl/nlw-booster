import { Request, Response } from 'express';
import * as Yup from 'yup';

import { AppError } from 'app/error/AppError';
import { AuthenticateUserService } from '../services/AuthenticateUserService';

class AuthenticateUserController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;

    const schema = Yup.object().shape({
      email: Yup.string().email().required(),
      password: Yup.string().min(6).required(),
    });

    if (!(await schema.isValid(request.body))) {
      throw new AppError('Validations failed');
    }

    const authenticateService = new AuthenticateUserService();

    const authenticate = await authenticateService.execute({
      email,
      password,
    });

    return response.json(authenticate);
  }
}

export { AuthenticateUserController };
