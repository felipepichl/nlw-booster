import { Class } from "@modules/classes/domain/Class";

import { ClassesRepositoryInMemory } from "../../repositories/in-memory/ClassesRepositoryInMemory";
import { ListAllClasses } from "./ListAllClasses";

let classesRepositoryInMemory: ClassesRepositoryInMemory;
let listAllClasses: ListAllClasses;

describe("List all classes", () => {
  beforeEach(() => {
    classesRepositoryInMemory = new ClassesRepositoryInMemory();

    listAllClasses = new ListAllClasses(classesRepositoryInMemory);
  });

  it("should be able to list all classes", async () => {
    const classes = Class.create({
      props: {
        coast: 100,
        subject_id: "subject_id",
        user_id: "user_id",
      },
    });

    await classesRepositoryInMemory.create(classes);

    const allClasses = await listAllClasses.execute();

    expect(allClasses[0]).toHaveProperty("id");
  });
});
