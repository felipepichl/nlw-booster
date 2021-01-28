import Orphanage from '@models/Orphanage';

import imageView, { IImage } from './images_view';

interface IOrphanage {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
  about: string;
  instructions: string;
  opening_hours: string;
  open_on_weekends: boolean;
  images: IImage[];
}

export default {
  render(orphanage: Orphanage): IOrphanage {
    return {
      id: orphanage.id,
      name: orphanage.name,
      latitude: orphanage.latitude,
      longitude: orphanage.longitude,
      about: orphanage.about,
      instructions: orphanage.instructions,
      opening_hours: orphanage.opening_hours,
      open_on_weekends: orphanage.open_on_weekends,
      images: imageView.renderMany(orphanage.images),
    };
  },

  renderMany(orphanages: Orphanage[]): IOrphanage[] {
    return orphanages.map(orphanage => this.render(orphanage));
  },
};
