import { ClassSchedule as IClassSchedule } from "@prisma/client";
import { v4 as uuid } from "uuid";

class ClassSchedule implements IClassSchedule {
  id: string;
  week_day: number;
  from: number;
  to: number;
  fk_class_id: string;
  created_at: Date;
  updated_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { ClassSchedule };
