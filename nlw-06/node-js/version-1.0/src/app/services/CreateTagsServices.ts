import { Repository, getCustomRepository } from 'typeorm';

import { Tag } from '@models/Tag';
import { TagsRepositories } from 'app/repositories/TagsRepositories';
import { AppError } from 'app/error/AppError';

interface IRequest {
  name: string;
}

class CreateTagsServices {
  private tagsRepository: Repository<Tag>;

  constructor() {
    this.tagsRepository = getCustomRepository(TagsRepositories);
  }

  public async execute({ name }: IRequest): Promise<Tag> {
    const tagAllreadyExists = await this.tagsRepository.findOne({ name });

    if (tagAllreadyExists) {
      throw new AppError('Tag already exists');
    }

    const tag = this.tagsRepository.create({
      name,
    });

    await this.tagsRepository.save(tag);

    return tag;
  }
}

export { CreateTagsServices };
