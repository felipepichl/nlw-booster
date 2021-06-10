import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import * as Yup from 'yup';
import AppError from 'app/errors/AppError';

import UsersRepository from '../repositories/UsersRepository';

class UsersController {
  public async store(request: Request, response: Response): Promise<Response> {
    const { name, email } = request.body;

    const schema = Yup.object().shape({
      name: Yup.string().required('Name is required'),
      email: Yup.string().email().required('Email is required'),
    });

    if (!(await schema.isValid(request.body))) {
      throw new AppError('Validation Failed!');
    }

    const userRepository = getCustomRepository(UsersRepository);

    const userExists = await userRepository.findOne({ email });

    if (userExists) {
      throw new AppError('User already exists');
    }

    const user = userRepository.create({
      name,
      email,
    });

    await userRepository.save(user);

    return response.status(201).json(user);
  }
}

export default UsersController;
