import { EntityRepository, Repository } from 'typeorm';

import { ClassSchedule } from '@entities/ClassSchedule';

@EntityRepository(ClassSchedule)
class ClassScheduleRepository extends Repository<ClassSchedule> {}

export { ClassScheduleRepository };
