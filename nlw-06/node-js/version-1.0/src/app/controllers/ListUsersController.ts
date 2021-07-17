import { Request, Response } from 'express';

import { classToClass } from 'class-transformer';

import { ListUserServices } from '../services/ListUsersService';

class ListUsersController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const listUsersServices = new ListUserServices();

    const user = await listUsersServices.execute();

    return response.json(classToClass(user));
  }
}

export { ListUsersController };
