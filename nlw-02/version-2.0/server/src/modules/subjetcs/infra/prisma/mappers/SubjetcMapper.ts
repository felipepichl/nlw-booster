import { Subject } from "@modules/subjetcs/domain/Subject";
import { Subject as RawSubject } from "@prisma/client";

import { IMapper } from "@shared/core/infra/Mapper";

class SubjecstMapper implements IMapper<Subject, RawSubject> {
  toPersistence(object: Subject): Subject {
    return object;
  }

  toDomain(raw: RawSubject): Subject {
    return Subject.create({
      props: raw,
    });
  }
}

export { SubjecstMapper };
