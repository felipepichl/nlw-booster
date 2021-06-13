import { getCustomRepository, Repository } from 'typeorm';

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
  private settingsRepository: Repository<Setting>;

  constructor() {
    this.settingsRepository = getCustomRepository(SettingsRepository);
  }

  public async execute({ username, chat }: IRequest): Promise<IResponse> {
    const settingsAlreadyExists = await this.settingsRepository.findOne({
      username,
    });

    if (settingsAlreadyExists) {
      throw new AppError('Settings already exists');
    }

    const setting = this.settingsRepository.create({
      username,
      chat,
    });

    await this.settingsRepository.save(setting);

    return { setting };
  }
}

export default new SettingServices();
