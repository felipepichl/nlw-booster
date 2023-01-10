import { AggregateRoot } from "@shared/core/domain/AggregateRoot";
import { UniqueEntityID } from "@shared/core/domain/UniqueEntityID";
import { Replace } from "@shared/helpers/Replace";

interface IUserProps {
  name: string;
  username: string;
  email: string;
  password: string;
  avatar: string;
  bio: string;
  whatsapp: string;
  createdAt: Date;
  updatedAt: Date;
}

class User extends AggregateRoot<IUserProps> {
  get name(): string {
    return this.props.name;
  }

  get username(): string {
    return this.props.username;
  }

  get email(): string {
    return this.props.email;
  }

  get password(): string {
    return this.props.password;
  }

  get avatar(): string {
    return this.props.avatar;
  }

  get bio(): string {
    return this.props.bio;
  }

  get whatsapp(): string {
    return this.props.whatsapp;
  }

  private constructor(
    props: Replace<IUserProps, { createdAt?: Date; updatedAt?: Date }>,
    id?: UniqueEntityID
  ) {
    super(
      // eslint-disable-next-line no-param-reassign
      (props = {
        ...props,
        createdAt: props.createdAt ?? new Date(),
        updatedAt: props.updatedAt ?? new Date(),
      }),
      id
    );
  }

  // constructor(
  //   props: Replace<IUserProps, { createdAt?: Date; updatedAt?: Date }>
  // ) {
  //   this.props = {
  //     ...props,
  //     createdAt: props.createdAt ?? new Date(),
  //     updatedAt: props.updatedAt ?? new Date(),
  //   };
  // }

  public static create(props: IUserProps, id?: UniqueEntityID): User {
    const user = new User(props, id);

    return user;
  }
}

export { User };
