import Item from '@models/Item';

export interface IItems {
  id: number;
  url: string;
}

export default {
  render(item: Item): IItems {
    return {
      id: item.id,
      url: `http://localhost:3333/uploads/items/${item.path}`,
    };
  },

  renderMay(items: Item[]): IItems[] {
    return items.map(item => this.render(item));
  },
};
