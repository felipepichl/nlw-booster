import Image from '@models/Image';

export interface IImage {
  image_url: string;
}

export default {
  render(image: Image): IImage {
    return {
      image_url: `http://10.1.1.104:3333/uploads/${image.path}`,
    };
  },

  renderMay(images: Image[]): IImage[] {
    return images.map(image => this.render(image));
  },
};
