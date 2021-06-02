import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';

import SurveysRepository from '../repositories/SurveysRepository';

class SurveysController {
  public async store(request: Request, response: Response): Promise<Response> {
    const { title, description } = request.body;

    const surveyRepository = getCustomRepository(SurveysRepository);

    const surveyExists = await surveyRepository.findOne({ title });

    if (surveyExists) {
      return response.status(400).json({ error: 'Survey already exists' });
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
