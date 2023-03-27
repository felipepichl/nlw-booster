import { Subject } from "../../domain/Subject";
import { ISubjetcsRepository } from "../ISubjetcsRepository";

class SubjectsRepositoryInMemory implements ISubjetcsRepository {
  subjects: Subject[] = [];

  async create(subject: Subject): Promise<Subject> {
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
    return this.subjects.find((subject) => subject.id.toString() === id);
  }
}

export { SubjectsRepositoryInMemory };
