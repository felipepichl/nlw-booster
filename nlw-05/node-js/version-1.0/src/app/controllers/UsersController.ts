import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';

import { UsersRepository } from 'app/repositories/UsersRepository';

class UsersController {
  public async store(request: Request, response: Response): Promise<Response> {
    const { name, email } = request.body;

    const userRepository = getCustomRepository(UsersRepository);

    const userAlreadyExists = userRepository.findOne(email);

    if (userAlreadyExists) {
      return response.status(400).json({ message: 'User already exists' });
    }

    const user = userRepository.create({
      name,
      email,
    });

    await userRepository.save(user);

    return response.json(user);
  }
}

export { UsersController };
