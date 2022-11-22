import { v4 as uuid } from 'uuid';
import { User as IUser } from '@prisma/client';

class User implements IUser {
  id: string;

  name: string;

  username: string;

  email: string;

  password: string;

  avatar: string;

  bio: string;

  whatsapp: string;

  created_at: Date;

  updated_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { User };
