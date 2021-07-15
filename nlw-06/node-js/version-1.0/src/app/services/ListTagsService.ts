import { Repository, getCustomRepository } from 'typeorm';

import { Tag } from '@models/Tag';
import { TagsRepositories } from '../repositories/TagsRepositories';

class ListTagsService {
  private tagsRepository: Repository<Tag>;

  constructor() {
    this.tagsRepository = getCustomRepository(TagsRepositories);
  }

  public async execute(): Promise<Tag[]> {
    const tags = await this.tagsRepository.find();

    return tags;
  }
}

export { ListTagsService };
