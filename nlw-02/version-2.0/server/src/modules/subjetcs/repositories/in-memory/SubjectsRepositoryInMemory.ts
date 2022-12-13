import { ICreateSubjectDTO } from "../../dtos/ICreateSubjectDTO";
import { Subject } from "../../infra/prisma/models/Subject";
import { ISubjetcsRepository } from "../ISubjetcsRepository";

class SubjectsRepositoryInMemory implements ISubjetcsRepository {
  subjects: Subject[] = [];

  async create({ title }: ICreateSubjectDTO): Promise<Subject> {
    const subject = new Subject();

    Object.assign(subject, { title });

    this.subjects.push(subject);

    return subject;
  }

  async list(): Promise<Subject[]> {
    return this.subjects;
  }

  async listByName(title: string): Promise<Subject> {
    return this.subjects.find((subject) => subject.title === title);
  }

  async listById(id: string): Promise<Subject> {
    return this.subjects.find((subject) => subject.id === id);
  }
}

export { SubjectsRepositoryInMemory };
