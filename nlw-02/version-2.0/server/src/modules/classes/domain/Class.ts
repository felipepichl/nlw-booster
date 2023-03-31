import { Subject } from "@modules/subjetcs/domain/Subject";
import { User } from "@modules/users/domain/User";

import { AggregateRoot } from "@shared/core/domain/AggregateRoot";
import { ICreateProps } from "@shared/core/domain/ICreateProps";
import { UniqueEntityID } from "@shared/core/domain/UniqueEntityID";

interface IClassProps {
  coast: number;
  user?: User;
  user_id: string;
  subject?: Subject;
  subject_id: string;
  created_at?: Date;
  updated_at?: Date;
}

class Class extends AggregateRoot<IClassProps> {
  private constructor(props: IClassProps, id?: UniqueEntityID) {
    super(props, id);
  }

  get coast(): number {
    return this.coast;
  }

  get user_id(): string {
    return this.user_id;
  }

  get subject_id(): string {
    return this.subject_id;
  }

  get created_at(): Date {
    return this.created_at;
  }

  get updated_at(): Date {
    return this.updated_at;
  }

  static create({ props, id }: ICreateProps<IClassProps>): Class {
    const classes = new Class(
      (props = {
        ...props,
        created_at: props.created_at ?? new Date(),
        updated_at: props.updated_at ?? new Date(),
      }),
      id
    );

    return classes;
  }
}

export { Class };
