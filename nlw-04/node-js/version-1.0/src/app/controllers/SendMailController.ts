import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';

import SurveysRepository from 'app/repositories/SurveysRepository';
import SurveysUsersRepository from 'app/repositories/SurveysUsersRepository';
import UsersRepository from 'app/repositories/UsersRepository';

class SendMailController {
  public async execute(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const { email, survey_id } = request.body;

    const usersRepository = getCustomRepository(UsersRepository);
    const surveysRepository = getCustomRepository(SurveysRepository);
    const surveysUsersRepository = getCustomRepository(SurveysUsersRepository);

    const userAlreadyExists = usersRepository.findOne({ email });

    if (!userAlreadyExists) {
      return response.status(400).json({
        error: 'User does not exists',
      });
    }

    const surveyAlreadyExists = await surveysRepository.findOne({
      id: survey_id,
    });

    if (!surveyAlreadyExists) {
      return response.status(400).json({
        error: 'Survey does not exists',
      });
    }

    const surveyUser = surveysUsersRepository.create({
      survey_id,
      user_id: (await userAlreadyExists).id,
    });

    await surveysUsersRepository.save(surveyUser);

    return response.json(surveyUser);
  }
}

export default SendMailController;
