import { v4 as uuid } from "uuid";

class UniqueEntityID {
  private value: string;

  constructor(id?: string) {
    this.value = id || uuid();
  }
}

export { UniqueEntityID };
