import { Request, Response } from 'express';

import { ProfileUserServices } from '../services/ProfileUserServices';

class ProfileUserController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const user_id = request.user.id;

    const service = new ProfileUserServices();

    const user = await service.execute({ user_id });

    return response.json(user);
  }
}

export { ProfileUserController };
