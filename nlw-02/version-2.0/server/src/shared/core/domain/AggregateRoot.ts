import { Entity } from "./Entity";
import { UniqueEntityID } from "./UniqueEntityID";

abstract class AggregateRoot<T> extends Entity<T> {
  get id(): UniqueEntityID {
    return this._id;
  }
}

export { AggregateRoot };
