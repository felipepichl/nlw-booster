import { v4 as uuid } from 'uuid';
import { Item as IItem } from '@prisma/client';

class Item implements IItem {
  id: string;

  title: string;

  path: string;

  created_at: Date;

  updated_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { Item };
