import { ClassesRepositoryInMemory } from "../../repositories/in-memory/ClassesRepositoryInMemory";
import { ListAllClassesBySubject } from "./ListAllClassesBySubject";

let classesRepositoryInMemory: ClassesRepositoryInMemory;
let listAllClassesBySubject: ListAllClassesBySubject;

describe("List Classes by Subject", () => {
  beforeEach(() => {
    classesRepositoryInMemory = new ClassesRepositoryInMemory();

    listAllClassesBySubject = new ListAllClassesBySubject(
      classesRepositoryInMemory
    );
  });

  it("should be able to list all clsses by subject id", () => {});
});
