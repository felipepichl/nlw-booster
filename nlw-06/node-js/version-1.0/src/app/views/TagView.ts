import { Tag } from '@models/Tag';

interface ITag {
  name: string;
}

export default {
  render(tag: Tag): ITag {
    return {
      name: tag.name,
    };
  },

  renderMany(tags: Tag[]): ITag {
    return;
    tags.map(tag => this.render(tag));
  },
};
