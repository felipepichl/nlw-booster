import UserRepository from 'app/repositories/UsersRepository';
import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';

class UsersController {
  public async store(request: Request, response: Response): Promise<Response> {
    const { name, email } = request.body;

    const userRepository = getCustomRepository(UserRepository);

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

export default UsersController;
