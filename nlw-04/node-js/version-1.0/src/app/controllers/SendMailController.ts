import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import { resolve } from 'path';
import * as Yup from 'yup';
import AppError from 'app/errors/AppError';

import UsersRepository from '../repositories/UsersRepository';
import SurveysUsersRepository from '../repositories/SurveysUsersRepository';
import SurveysRepository from '../repositories/SurveysRepository';

import SendMailService from '../../services/SendEmailService';

class SendMailController {
  public async execute(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const { email, survey_id } = request.body;

    const schema = Yup.object().shape({
      email: Yup.string().email().required('Email is required'),
      survey_id: Yup.string().required('Survey ID is required'),
    });

    if (!(await schema.isValid(request.body))) {
      throw new AppError('Validation Failed!');
    }

    const usersRepository = getCustomRepository(UsersRepository);
    const surveysRepository = getCustomRepository(SurveysRepository);
    const surveysUsersRepository = getCustomRepository(SurveysUsersRepository);

    const user = await usersRepository.findOne({ email });

    if (!user) {
      throw new AppError('User does not exists');
    }

    const survey = await surveysRepository.findOne({
      id: survey_id,
    });

    if (!survey) {
      throw new AppError('Survey does not exists');
    }

    const npsPath = resolve(
      __dirname,
      '..',
      '..',
      'app',
      'views',
      'emails',
      'npsMail.hbs',
    );

    const surveyUserAlreadyExists = await surveysUsersRepository.findOne({
      where: { user_id: user.id, value: null },
      relations: ['user', 'survey'],
    });

    const variables = {
      name: user.name,
      title: survey.title,
      description: survey.description,
      id: '',
      link: process.env.URL_MAIL,
    };

    if (surveyUserAlreadyExists) {
      variables.id = surveyUserAlreadyExists.id;

      await SendMailService.execute(email, survey.title, variables, npsPath);
      return response.json(surveyUserAlreadyExists);
    }

    const surveyUser = surveysUsersRepository.create({
      survey_id,
      user_id: user.id,
    });

    await surveysUsersRepository.save(surveyUser);

    variables.id = surveyUser.id;

    await SendMailService.execute(email, survey.title, variables, npsPath);

    return response.json(surveyUser);
  }
}

export default SendMailController;
