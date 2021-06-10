import { getCustomRepository } from 'typeorm';

import { Settings } from '@models/Settings';
import { SettingsRepository } from 'app/repositories/SettingsRepository';

import { AppError } from 'app/errors/AppError';

interface IRequest {
  username: string;
  chat: boolean;
}

interface IResponse {
  settings: Settings;
}

class SettingServices {
  public async execute({ username, chat }: IRequest): Promise<IResponse> {
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

    return { settings };
  }
}

export default new SettingServices();
