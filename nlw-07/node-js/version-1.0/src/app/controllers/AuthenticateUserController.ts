import { Request, Response } from 'express';

import { AuthenticateUserServices } from '../services/AuthenticateUserServices';

class AuthenticateUserController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { code } = request.query;

    const authenticateUserServices = new AuthenticateUserServices();

    authenticateUserServices.execute({ code });
  }
}

export { AuthenticateUserController };
