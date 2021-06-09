import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';

import SurveysUsersRepository from 'app/repositories/SurveysUsersRepository';

class AnswerController {
  public async execute(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const { value } = request.params;
    const { u } = request.query;

    const surveysUsersRepository = getCustomRepository(SurveysUsersRepository);

    const surveyUser = await surveysUsersRepository.findOne({ id: String(u) });

    if (!surveyUser) {
      return response.status(400).json({
        error: 'Survey User does not exists',
      });
    }

    surveyUser.value = Number(value);

    await surveysUsersRepository.save(surveyUser);

    return response.json(surveyUser);
  }
}

export default AnswerController;
