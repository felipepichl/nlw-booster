import { EntityRepository, Repository } from 'typeorm';

import { Class } from '@entities/Class';

@EntityRepository(Class)
class ClassesREpository extends Repository<Class> {}

export { ClassesREpository };
