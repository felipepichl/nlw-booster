import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';

import { AppError } from 'app/errors/AppError';
import { UsersRepository } from 'app/repositories/UsersRepository';

class UsersController {
  public async store(request: Request, response: Response): Promise<Response> {
    const { name, email } = request.body;

    const userRepository = getCustomRepository(UsersRepository);

    const userAlreadyExists = userRepository.findOne(email);

    if (userAlreadyExists) {
      throw new AppError('User already exists');
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
