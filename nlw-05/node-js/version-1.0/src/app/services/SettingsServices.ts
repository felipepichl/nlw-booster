import { getCustomRepository } from 'typeorm';

import { Setting } from '@models/Setting';
import { SettingsRepository } from 'app/repositories/SettingsRepository';

import { AppError } from 'app/errors/AppError';

interface IRequest {
  username: string;
  chat: boolean;
}

interface IResponse {
  setting: Setting;
}

class SettingServices {
  public async execute({ username, chat }: IRequest): Promise<IResponse> {
    const settingsRepository = getCustomRepository(SettingsRepository);

    const settingsAlreadyExists = await settingsRepository.findOne({
      username,
    });

    if (settingsAlreadyExists) {
      throw new AppError('Settings already exists');
    }

    const setting = settingsRepository.create({
      username,
      chat,
    });

    await settingsRepository.save(setting);

    return { setting };
  }
}

export default new SettingServices();
