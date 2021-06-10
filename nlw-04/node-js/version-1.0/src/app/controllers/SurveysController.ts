import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import * as Yup from 'yup';
import AppError from 'app/errors/AppError';

import SurveysRepository from '../repositories/SurveysRepository';

class SurveysController {
  public async store(request: Request, response: Response): Promise<Response> {
    const { title, description } = request.body;

    const schema = Yup.object().shape({
      title: Yup.string().required('Title is required'),
      description: Yup.string().required('Description is required'),
    });

    if (!(await schema.isValid(request.body))) {
      throw new AppError('Validation Failed!');
    }

    const surveyRepository = getCustomRepository(SurveysRepository);

    const surveyExists = await surveyRepository.findOne({ title });

    if (surveyExists) {
      throw new AppError('Survey already exists');
    }

    const survey = surveyRepository.create({
      title,
      description,
    });

    await surveyRepository.save(survey);

    return response.status(201).json(survey);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const surveyRepository = getCustomRepository(SurveysRepository);

    const serveys = await surveyRepository.find();

    return response.json(serveys);
  }
}

export default SurveysController;
