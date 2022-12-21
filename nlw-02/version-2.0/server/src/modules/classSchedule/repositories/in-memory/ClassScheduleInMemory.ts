import { ClassesRepositoryInMemory } from "@modules/classes/repositories/in-memory/ClassesRepositoryInMemory";
import { ICreateClassSchedule } from "@modules/classSchedule/dtos/ICreateClassSchedule";
import { ClassSchedule } from "@modules/classSchedule/infra/prisma/ClassSchedule";

import { IClassScheduleRepository } from "../IClassScheduleRepository";

class ClassScheduleInMemory implements IClassScheduleRepository {
  private classSchedules: ClassSchedule[] = [];

  async create(data: ICreateClassSchedule): Promise<ClassSchedule> {
    const classSchedule = new ClassSchedule();

    Object.assign(classSchedule, data);

    this.classSchedules.push(classSchedule);

    return classSchedule;
  }
  async list(
    week_day: string,
    subject: string,
    time: string
  ): Promise<ClassSchedule[]> {
    /**
     * List all classes with sibject_title and with map return all ids in a array
     * in result insert this array Ex: fk_class_id = IN(allClassesIds)
     */

    // const allClassesWithSubject = await Cl

    return this.classSchedules.filter(
      (classSchedule) => classSchedule.week_day === Number(week_day)
    );
  }
}

export { ClassScheduleInMemory };
