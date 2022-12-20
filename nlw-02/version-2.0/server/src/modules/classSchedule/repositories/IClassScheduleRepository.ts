import { ICreateClassSchedule } from "../dtos/ICreateClassSchedule";
import { ClassSchedule } from "../infra/prisma/ClassSchedule";

interface IClassScheduleRepository {
  create(data: ICreateClassSchedule): Promise<ClassSchedule>;
  list(
    week_day: string,
    subject: string,
    time: string
  ): Promise<ClassSchedule[]>;
}

export { IClassScheduleRepository };
