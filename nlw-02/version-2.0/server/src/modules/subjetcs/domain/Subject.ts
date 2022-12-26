import { v4 as uuid } from "uuid";

import { Replace } from "@shared/helpers/Replace";

interface ISubjectProps {
  id: string;
  title: string;

  createdAt: Date;
  updatedAt: Date;
}

class Subject {
  private props: ISubjectProps;

  constructor(
    props: Replace<
      ISubjectProps,
      { id?: string; createdAt?: Date; updatedAt?: Date }
    >
  ) {
    this.props = {
      ...props,
      id: props.id ?? uuid(),
      createdAt: props.createdAt ?? new Date(),
      updatedAt: props.updatedAt ?? new Date(),
    };
  }

  public set id(id: string) {
    this.props.id = id;
  }

  public get id() {
    return this.props.id;
  }

  public set title(title: string) {
    this.props.title = title;
  }

  public get title() {
    return this.props.title;
  }
}

export { Subject };
