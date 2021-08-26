import { Item } from '@modules/Items/infra/typeorm/entities/Item';

export interface IItems {
  id: number;
  title: string;
  url: string;
}

export default {
  render(item: Item): IItems {
    return {
      id: item.id,
      title: item.title,
      url: `http://10.1.1.104:3333/uploads/items/${item.path}`,
    };
  },

  renderMay(items: Item[]): IItems[] {
    return items.map(item => this.render(item));
  },
};
