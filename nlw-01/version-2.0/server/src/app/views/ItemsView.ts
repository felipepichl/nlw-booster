import Item from '@models/Item';

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
      url: `http://localhost:3333/uploads/items/${item.path}`,
    };
  },

  renderMay(items: Item[]): IItems[] {
    return items.map(item => this.render(item));
  },
};
