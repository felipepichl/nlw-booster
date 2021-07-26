import { EntityRepository, Repository } from 'typeorm';

import { Subject } from '@entities/Subject';

@EntityRepository(Subject)
class SubjectsRepository extends Repository<Subject> {}

export { SubjectsRepository };
