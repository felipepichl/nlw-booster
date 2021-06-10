import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import * as Yup from 'yup';

import { AppError } from 'app/errors/AppError';
import { UsersRepository } from 'app/repositories/UsersRepository';

class UsersController {
  public async store(request: Request, response: Response): Promise<Response> {
    const { name, email } = request.body;

    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string().email().required(),
    });

    if (!(await schema.isValid(request.body))) {
      throw new AppError('Validations Failed!');
    }

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
