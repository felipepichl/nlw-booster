import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateUserUseCase } from '../../../useCases/createUsers/CreateUserUseCase';

class UsersControllerss {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { username, email, password, whatsapp } = request.body;

    const createUserUseCase = container.resolve(CreateUserUseCase);

    const user = await createUserUseCase.execute({
      username,
      email,
      password,
      whatsapp,
    });

    return response.json(user);
  }
}

export { UsersControllerss };
