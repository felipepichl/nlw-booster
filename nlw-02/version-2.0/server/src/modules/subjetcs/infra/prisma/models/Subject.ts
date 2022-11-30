import { v4 as uuid } from 'uuid';
import { Subject as ISubject } from '@prisma/client';

class Subject implements ISubject {
  id: string;

  title: string;

  created_at: Date;

  updated_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { Subject };
