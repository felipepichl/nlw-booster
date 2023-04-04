import { Class } from "@modules/classes/domain/Class";
import { Class as RawClass } from "@prisma/client";

class ClassesMappers {
  static toPrisma(classes: Class) {
    return classes;
  }

  static toDomain(raw: RawClass): Class {
    return Class.create({ props: raw });
  }
}

export { ClassesMappers };
