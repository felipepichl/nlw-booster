import { SubjectsRepositoryInMemory } from '../../repositories/in-memory/SubjectsRepositoryInMemory';

import { CreateSubjectUseCase } from './CreateSubjectUseCase';

let subjectsRepositoryInMemory: SubjectsRepositoryInMemory;
let createSubjectUseCase: CreateSubjectUseCase;

describe('Create Subjects', () => {
  beforeEach(() => {
    subjectsRepositoryInMemory = new SubjectsRepositoryInMemory();

    createSubjectUseCase = new CreateSubjectUseCase(subjectsRepositoryInMemory);
  });

  it('should be able to create a new subject', async () => {
    const subject = await createSubjectUseCase.execute({
      title: 'subject_test',
    });

    expect(subject).toHaveProperty('id');
  });
});
