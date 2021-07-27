import { EntityRepository, Repository } from 'typeorm';

import { Class } from '@entities/Class';

@EntityRepository(Class)
class ClassesRepository extends Repository<Class> {}

export { ClassesRepository };
