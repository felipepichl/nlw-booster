import { Request, Response } from 'express';
import * as Yup from 'yup';

import { AppError } from 'app/errors/AppError';

import SettingsServices from '../services/SettingsServices';

class SettingsController {
  public async store(request: Request, response: Response): Promise<Response> {
    const { username, chat } = request.body;

    const schema = Yup.object().shape({
      username: Yup.string().required(),
      chat: Yup.boolean().required(),
    });

    if (!(await schema.isValid(request.body))) {
      throw new AppError('Validations Failed!');
    }

    const settings = await SettingsServices.execute({ username, chat });

    return response.json(settings);
  }
}

export { SettingsController };
