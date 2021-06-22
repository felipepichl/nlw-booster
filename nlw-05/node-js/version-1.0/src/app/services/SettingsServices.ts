import { getCustomRepository, Repository } from 'typeorm';

import { AppError } from 'app/errors/AppError';

import { SettingsRepository } from 'app/repositories/SettingsRepository';
import { Setting } from '../models/Setting';

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

  public async create({ username, chat }: IRequest): Promise<IResponse> {
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

  public async findByUserName(username: string): Promise<Setting> {
    const settings = await this.settingsRepository.findOne({
      username,
    });

    return settings;
  }

  public async update(username: string, chat: boolean): Promise<void> {
    await this.settingsRepository
      .createQueryBuilder()
      .update(Setting)
      .set({ username, chat })
      .where('username = :username', {
        username,
      })
      .execute();
  }
}

export { SettingServices };
