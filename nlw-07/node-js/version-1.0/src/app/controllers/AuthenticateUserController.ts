import { AppError } from 'app/error/AppError';
import { Request, Response } from 'express';

import { AuthenticateUserService } from '../services/AuthenticateUserService';

class AuthenticateUserController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { code } = request.body;

    const service = new AuthenticateUserService();

    const result = await service.execute({ code });

    if (!result) {
      throw new AppError('Error 401');
    }
    return response.json(result);
  }
}

export { AuthenticateUserController };
