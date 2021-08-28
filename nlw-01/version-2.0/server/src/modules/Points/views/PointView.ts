import { Point } from '@modules/Points/infra/typeorm/entities/Point';

import itemView, { IItems } from '@modules/items/views/ItemsView';

interface IPoint {
  id: number;
  name: string;
  email: string;
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
      email: point.email,
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
