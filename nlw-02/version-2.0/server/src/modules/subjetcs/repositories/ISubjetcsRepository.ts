import { Subject } from "../domain/Subject";

interface ISubjetcsRepository {
  create(subject: Subject): Promise<Subject>;
  list(): Promise<Subject[]>;
  listByName(title: string): Promise<Subject>;
  listById(id: string): Promise<Subject>;
}

export { ISubjetcsRepository };
