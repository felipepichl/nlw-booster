import Point from '@models/Point';

import imageView, { IImage } from './ImageView';
import itemView, { IItems } from './ItemsView';

interface IPoint {
  id: number;
  name: string;
  whatsapp: string;
  latitude: number;
  longitude: number;
  city: string;
  uf: string;
  images: IImage[];
  items: IItems[];
}

export default {
  render(point: Point): IPoint {
    return {
      id: point.id,
      name: point.name,
      whatsapp: point.whatsapp,
      latitude: point.latitude,
      longitude: point.longitude,
      city: point.city,
      uf: point.uf,
      images: imageView.renderMay(point.images),
      items: itemView.renderMay(point.items),
    };
  },

  renderMany(points: Point[]): IPoint[] {
    return points.map(point => this.render(point));
  },
};
