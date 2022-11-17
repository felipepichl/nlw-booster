import { v4 as uuid } from 'uuid';
import { Point as IPoint } from '@prisma/client';

class Point implements IPoint {
  id: string;

  name: string;

  email: string;

  whatsapp: string;

  latitude: string;

  longitude: string;

  city: string;

  uf: string;

  image: string;

  created_at: Date;

  updated_at: Date;

  fk_user_id: string;

  constructor() {
    if (this.id) {
      this.id = uuid();
    }
  }
}

export { Point };
