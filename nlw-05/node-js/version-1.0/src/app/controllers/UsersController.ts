import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';

import { UsersRepository } from 'app/repositories/UsersRepository';

class UsersController {
  public async store(request: Request, response: Response): Promise<Response> {
    const { name, email } = request.body;

    const userRepository = getCustomRepository(UsersRepository);

    const user = userRepository.create({
      name,
      email,
    });

    await userRepository.save(user);

    return response.json(user);
  }
}

export { UsersController };
