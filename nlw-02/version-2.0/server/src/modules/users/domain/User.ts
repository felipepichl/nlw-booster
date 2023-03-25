import { AggregateRoot } from "@shared/core/domain/AggregateRoot";
import { ICreateProps } from "@shared/core/domain/ICreateProps";
import { UniqueEntityID } from "@shared/core/domain/UniqueEntityID";

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
  private constructor(props: IUserProps, id?: UniqueEntityID) {
    super(props, id);
  }

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

  public static create({ props, id }: ICreateProps<IUserProps>): User {
    const user = new User(
      (props = {
        ...props,
        createdAt: props.createdAt ?? new Date(),
        updatedAt: props.updatedAt ?? new Date(),
      }),
      id
    );

    return user;
  }
}

export { User };
