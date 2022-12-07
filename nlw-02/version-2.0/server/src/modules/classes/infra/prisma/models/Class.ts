import { Class as IClass } from "@prisma/client";
import { v4 as uuid } from "uuid";

class Class implements IClass {
  id: string;

  cost: number;

  fk_user_id: string;

  fk_subject_id: string;

  created_at: Date;

  updated_at: Date;

  userId: string;

  subjectId: string;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { Class };
