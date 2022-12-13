import { SubjectsRepositoryInMemory } from "@modules/subjetcs/repositories/in-memory/SubjectsRepositoryInMemory";

import { AppError } from "@shared/errors/AppError";

import { ClassesRepositoryInMemory } from "../../repositories/in-memory/ClassesRepositoryInMemory";
import { ListAllClassesBySubject } from "./ListAllClassesBySubject";

let classesRepositoryInMemory: ClassesRepositoryInMemory;
let subjectsRepositoryInMemory: SubjectsRepositoryInMemory;
let listAllClassesBySubject: ListAllClassesBySubject;

describe("List Classes by Subject", () => {
  beforeEach(() => {
    classesRepositoryInMemory = new ClassesRepositoryInMemory();
    subjectsRepositoryInMemory = new SubjectsRepositoryInMemory();

    listAllClassesBySubject = new ListAllClassesBySubject(
      classesRepositoryInMemory,
      subjectsRepositoryInMemory
    );
  });

  it("should be able to list all clsses by subject id", async () => {
    const subject = await subjectsRepositoryInMemory.create({
      title: "Subject_test",
    });

    const { id } = subject;

    await classesRepositoryInMemory.create({
      cost: 100,
      subject_id: id,
      user_id: "user_id",
    });

    const allClasses = await listAllClassesBySubject.execute({
      subject_id: "subject_id",
    });

    expect(allClasses[0]).toHaveProperty("id");
  });

  it("should not be able to list all clsses by wrong subject id", async () => {
    await expect(
      listAllClassesBySubject.execute({
        subject_id: "subject_id",
      })
    ).rejects.toBeInstanceOf(AppError);
  });
});
