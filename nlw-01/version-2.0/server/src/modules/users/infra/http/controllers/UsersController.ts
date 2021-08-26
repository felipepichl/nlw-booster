import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateUserServices } from '../../../services/CreateUserServices';

class UsersController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { username, name, email, password } = request.body;

    const usersService = container.resolve(CreateUserServices);

    const user = await usersService.execute({
      username,
      name,
      email,
      password,
    });

    return response.json(user);
  }
}

export { UsersController };
