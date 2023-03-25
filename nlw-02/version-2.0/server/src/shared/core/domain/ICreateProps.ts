import { Replace } from "@shared/helpers/Replace";

import { UniqueEntityID } from "./UniqueEntityID";

interface ICreateProps<A> {
  props: Replace<A, { createdAt?: Date; updatedAt?: Date }>;
  id?: UniqueEntityID;
}

export { ICreateProps };
