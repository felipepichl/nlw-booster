import { Subject } from '../infra/prisma/models/Subject';
import { ICreateSubjectDTO } from '../dtos/ICreateSubjectDTO';

interface ISubjetcsRepository {
  create(data: ICreateSubjectDTO): Promise<Subject>;
  list(): Promise<Subject[]>;
  listByName(title: string): Promise<Subject>;
}

export { ISubjetcsRepository };
