import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';

import { AppError } from 'app/errors/AppError';
import { SettingsRepository } from 'app/repositories/SettingsRepository';

class SettingsController {
  public async store(request: Request, response: Response): Promise<Response> {
    const { username, chat } = request.body;

    const settingsRepository = getCustomRepository(SettingsRepository);

    const settingsAlreadyExists = settingsRepository.findOne(username);

    if (settingsAlreadyExists) {
      throw new AppError('Settings already exists');
    }

    const settings = settingsRepository.create({
      username,
      chat,
    });

    await settingsRepository.save(settings);

    return response.json(settings);
  }
}

export { SettingsController };
