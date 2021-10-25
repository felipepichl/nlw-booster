import { AppError } from 'app/error/AppError';
import { Request, Response } from 'express';

import { AuthenticateUserServices } from '../services/AuthenticateUserServices';

class AuthenticateUserController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { code } = request.body;

    const authenticateUserServices = new AuthenticateUserServices();

    const result = await authenticateUserServices.execute({ code });

    if (!result) {
      throw new AppError('Error 401');
    }
    return response.json(result);
  }
}

export { AuthenticateUserController };
