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
    const classes = await listAllClasses.execute();

    expect(classes[0]).toHaveProperty("id");
  });
});
