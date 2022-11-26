import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateUserServices } from '../../../useCases/createUsers/CreateUserServices';

class UsersControllerss {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { username, email, password, whatsapp } = request.body;

    // const createUsersWithGithubServices = new CreateUsersWithGithubServices();

    const user = await createUsersWithGithubServices.execute({
      username,
      email,
      password,
      whatsapp,
    });

    return response.json(user);
  }
}

export { UsersControllerss };
