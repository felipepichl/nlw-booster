import { Replace } from "@shared/helpers/Replace";

import { UniqueEntityID } from "./UniqueEntityID";

interface IUniqueEntityCreate<T> {
  create(
    props: Replace<T, { createdAt?: Date; updatedAt?: Date }>,
    id?: UniqueEntityID
  ): T;
}

export { IUniqueEntityCreate };
