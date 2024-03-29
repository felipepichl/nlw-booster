import { Replace } from "@shared/helpers/Replace";

import { UniqueEntityID } from "./UniqueEntityID";

interface ICreateProps<A> {
  props: Replace<A, { created_at?: Date; updated_at?: Date }>;
  id?: UniqueEntityID;
}

export { ICreateProps };
