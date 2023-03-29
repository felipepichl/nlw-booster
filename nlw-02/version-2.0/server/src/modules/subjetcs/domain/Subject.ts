import { AggregateRoot } from "@shared/core/domain/AggregateRoot";
import { ICreateProps } from "@shared/core/domain/ICreateProps";
import { UniqueEntityID } from "@shared/core/domain/UniqueEntityID";

interface ISubjectProps {
  title: string;
  created_at: Date;
  updated_at: Date;
}

class Subject extends AggregateRoot<ISubjectProps> {
  private constructor(props: ISubjectProps, id?: UniqueEntityID) {
    super(props, id);
  }

  get title() {
    return this.props.title;
  }

  static create({ props, id }: ICreateProps<ISubjectProps>): Subject {
    const subject = new Subject(
      (props = {
        ...props,
        created_at: props.created_at ?? new Date(),
        updated_at: props.updated_at ?? new Date(),
      }),
      id
    );
    return subject;
  }
}

export { Subject };
