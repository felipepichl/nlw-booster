import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import { resolve } from 'path';

import SurveysRepository from 'app/repositories/SurveysRepository';
import SurveysUsersRepository from 'app/repositories/SurveysUsersRepository';
import UsersRepository from 'app/repositories/UsersRepository';

import SendMailService from '../../services/SendEmailService';

class SendMailController {
  public async execute(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const { email, survey_id } = request.body;

    const usersRepository = getCustomRepository(UsersRepository);
    const surveysRepository = getCustomRepository(SurveysRepository);
    const surveysUsersRepository = getCustomRepository(SurveysUsersRepository);

    const user = await usersRepository.findOne({ email });

    if (!user) {
      return response.status(400).json({
        error: 'User does not exists',
      });
    }

    const survey = await surveysRepository.findOne({
      id: survey_id,
    });

    if (!survey) {
      return response.status(400).json({
        error: 'Survey does not exists',
      });
    }

    const surveyUser = surveysUsersRepository.create({
      survey_id,
      user_id: user.id,
    });

    await surveysUsersRepository.save(surveyUser);

    const npsPath = resolve(
      __dirname,
      '..',
      '..',
      'app',
      'views',
      'emails',
      'npsMail.hbs',
    );

    const variables = {
      name: user.name,
      title: survey.title,
      description: survey.description,
    };

    await SendMailService.execute(email, survey.title, variables, npsPath);

    return response.json(surveyUser);
  }
}

export default SendMailController;
