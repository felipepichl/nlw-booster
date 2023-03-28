import { Subject } from "@modules/subjetcs/domain/Subject";

import { SubjectsRepositoryInMemory } from "../../repositories/in-memory/SubjectsRepositoryInMemory";
import { ListSubjectsUseCase } from "./ListSubjectsUseCase";

let subjectsRepositoryInMemory: SubjectsRepositoryInMemory;
let listSubjectsUseCase: ListSubjectsUseCase;

describe("List Subjects", () => {
  beforeAll(() => {
    subjectsRepositoryInMemory = new SubjectsRepositoryInMemory();

    listSubjectsUseCase = new ListSubjectsUseCase(subjectsRepositoryInMemory);
  });

  it("should be able to list all subjects", async () => {
    const subject = Subject.create({
      props: {
        title: "Subject test",
      },
    });

    const subjectCreated = await subjectsRepositoryInMemory.create(subject);

    const subjects = await listSubjectsUseCase.execute();

    expect(subjectCreated).toHaveProperty("id");
    expect(subjects).toContainEqual(subject);
  });
});
