import Point from '@models/Point';

import itemView, { IItems } from './ItemsView';

interface IPoint {
  id: number;
  name: string;
  whatsapp: string;
  latitude: number;
  longitude: number;
  city: string;
  uf: string;
  image_url: string;
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
      image_url: `http://10.1.1.104:3333/uploads/${point.image}`,
      items: itemView.renderMay(point.items),
    };
  },

  renderMany(points: Point[]): IPoint[] {
    return points.map(point => this.render(point));
  },
};
