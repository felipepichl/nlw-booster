import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';

import SurveysRepository from 'app/repositories/SurveysRepository';
import SurveysUsersRepository from 'app/repositories/SurveysUsersRepository';
import UsersRepository from 'app/repositories/UsersRepository';

class SendMailController {
  public async execute(request: Request, response: Response): Promise<void> {
    const { email, survey_id } = request.body;

    const usersRepository = getCustomRepository(UsersRepository);
    const surveysRepository = getCustomRepository(SurveysRepository);
    const surveysUsersRepository = getCustomRepository(SurveysUsersRepository);

    const userAlreadyExists = usersRepository.findOne(email);
  }
}

export default SendMailController;
