import { SubjectsRepositoryInMemory } from '../../repositories/in-memory/SubjectsRepositoryInMemory';
import { ListSubjectsUseCase } from './ListSubjectsUseCase';

let subjectsRepositoryInMemory: SubjectsRepositoryInMemory;
let listSubjectsUseCase: ListSubjectsUseCase;

describe('List Subjects', () => {
  beforeAll(() => {
    subjectsRepositoryInMemory = new SubjectsRepositoryInMemory();

    listSubjectsUseCase = new ListSubjectsUseCase(subjectsRepositoryInMemory);
  });

  it('should be able to list all subjects', async () => {
    const subject = await subjectsRepositoryInMemory.create({
      title: 'subject_test',
    });

    const subjects = await listSubjectsUseCase.execute();

    expect(subject).toHaveProperty('id');
    expect(subjects).toContainEqual(subject);
  });
});
