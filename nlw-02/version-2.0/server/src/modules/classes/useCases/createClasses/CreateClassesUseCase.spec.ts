import { ClassesRepositoryInMemory } from "../../repositories/in-memory/ClassesRepositoryInMemory";
import { CreateClassesUseCase } from "./CreateClassesUseCase";

let classesRepositoryInMemory: ClassesRepositoryInMemory;
let createClassesUseCase: CreateClassesUseCase;

describe("Create Classes", () => {
  beforeEach(() => {
    classesRepositoryInMemory = new ClassesRepositoryInMemory();

    createClassesUseCase = new CreateClassesUseCase(classesRepositoryInMemory);
  });

  it("shoul be abre to create a new class", async () => {
    const classes = await createClassesUseCase.execute({
      coast: 100,
      subject_id: "subject_id",
      user_id: "user_id",
    });

    expect(classes).toHaveProperty("id");
  });
});
