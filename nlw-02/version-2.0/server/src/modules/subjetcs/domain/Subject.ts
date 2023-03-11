import { AggregateRoot } from "@shared/core/domain/AggregateRoot";
import { IUniqueEntityCreate } from "@shared/core/domain/UniqueEntityCreate";
import { UniqueEntityID } from "@shared/core/domain/UniqueEntityID";
import { Replace } from "@shared/helpers/Replace";

interface ISubjectProps {
  title: string;
  createdAt: Date;
  updatedAt: Date;
}

class Subject
  extends AggregateRoot<ISubjectProps>
  implements IUniqueEntityCreate<Subject>
{
  private constructor(props: ISubjectProps, id?: UniqueEntityID) {
    super(props, id);
  }

  public set title(title: string) {
    this.props.title = title;
  }

  public get title() {
    return this.props.title;
  }

  create(
    props: Replace<ISubjectProps, { createdAt?: Date; updatedAt?: Date }>,
    id?: UniqueEntityID
  ): Subject {
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
