import { Subject } from "@modules/subjetcs/domain/Subject";

import { IMapper } from "@shared/core/infra/Mapper";

class SubjectMapper implements IMapper {
  toPersistence<Subject>(object: Subject): Subject {
    return object;
  }
  toDomain<Subject, Subject>(raw: L): Subject {
    throw new Error("Method not implemented.");
  }
}

export { SubjectMapper };
