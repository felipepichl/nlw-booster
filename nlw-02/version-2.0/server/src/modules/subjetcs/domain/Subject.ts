import { AggregateRoot } from "@shared/core/domain/AggregateRoot";
import { ICreateProps } from "@shared/core/domain/ICreateProps";
import { UniqueEntityID } from "@shared/core/domain/UniqueEntityID";

interface ISubjectProps {
  title: string;
  createdAt: Date;
  updatedAt: Date;
}

class Subject extends AggregateRoot<ISubjectProps> {
  private constructor(props: ISubjectProps, id?: UniqueEntityID) {
    super(props, id);
  }

  public set title(title: string) {
    this.props.title = title;
  }

  public get title() {
    return this.props.title;
  }

  public static create({ props, id }: ICreateProps<ISubjectProps>): Subject {
    const subject = new Subject(
      (props = {
        ...props,
        createdAt: props.createdAt ?? new Date(),
        updatedAt: props.updatedAt ?? new Date(),
      }),
      id
    );
    return subject;
  }
}

export { Subject };
