import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateSessionServices } from '@modules/users/services/CreateSessionServices';

class SessionController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;

    const sessionServices = container.resolve(CreateSessionServices);

    const { user, token } = await sessionServices.execute({
      email,
      password,
    });

    return response.json({ user, token });
  }
}

export { SessionController };
