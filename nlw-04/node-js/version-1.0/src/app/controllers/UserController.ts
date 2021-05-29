import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import User from '../models/User';

class UserController {
  public async store(request: Request, response: Response): Promise<Response> {
    const { name, email } = request.body;

    const userRepository = getRepository(User);

    const userExists = userRepository.findOne({ where: email });

    if (userExists) {
      return response.status(400).json({ error: 'User already exists' });
    }

    const user = userRepository.create({
      name,
      email,
    });

    await userRepository.save(user);

    return response.json(user);
  }
}

export default UserController;
