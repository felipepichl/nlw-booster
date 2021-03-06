import { Request, Response } from 'express';
import * as Yup from 'yup';

import { AppError } from 'app/errors/AppError';

import { SettingServices } from '../services/SettingsServices';

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

    const settingsServices = new SettingServices();

    const setting = await settingsServices.create({ username, chat });

    return response.json(setting);
  }

  public async findByUserName(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const { username } = request.params;

    const settingsServices = new SettingServices();

    const setting = await settingsServices.findByUserName(username);

    return response.json(setting);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { username } = request.params;
    const { chat } = request.body;

    const settingsServices = new SettingServices();

    const setting = await settingsServices.update(username, chat);

    return response.json(setting);
  }
}

export { SettingsController };
