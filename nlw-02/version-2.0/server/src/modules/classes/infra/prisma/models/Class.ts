import { Subject } from "@modules/subjetcs/infra/prisma/models/Subject";
import { Class as IClass } from "@prisma/client";
import { v4 as uuid } from "uuid";

class Class implements IClass {
  id: string;

  cost: number;

  fk_user_id: string;

  fk_subject_id: string;
  subject?: Subject;

  created_at: Date;

  updated_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { Class };
