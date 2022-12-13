import { ICreateSubjectDTO } from "../dtos/ICreateSubjectDTO";
import { Subject } from "../infra/prisma/models/Subject";

interface ISubjetcsRepository {
  create(data: ICreateSubjectDTO): Promise<Subject>;
  list(): Promise<Subject[]>;
  listByName(title: string): Promise<Subject>;
  listById(id: string): Promise<Subject>;
}

export { ISubjetcsRepository };
