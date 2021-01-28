import Image from '@models/Image';

export interface IImage {
  id: number;
  url: string;
}

export default {
  render(image: Image): IImage {
    return {
      id: image.id,
      url: `http://10.1.1.105:3333/uploads/${image.path}`,
    };
  },

  renderMany(images: Image[]): IImage[] {
    return images.map(image => this.render(image));
  },
};
