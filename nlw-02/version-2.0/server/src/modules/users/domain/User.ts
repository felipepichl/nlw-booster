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

class User {
  private props: IUserProps;

  constructor(
    props: Replace<IUserProps, { createdAt?: Date; updatedAt?: Date }>
  ) {
    this.props = {
      ...props,
      createdAt: props.createdAt ?? new Date(),
      updatedAt: props.updatedAt ?? new Date(),
    };
  }

  public get name(): string {
    return this.props.name;
  }

  public get username(): string {
    return this.props.username;
  }

  public get email(): string {
    return this.props.email;
  }

  public get password(): string {
    return this.props.password;
  }

  public get avatar(): string {
    return this.props.avatar;
  }

  public get bio(): string {
    return this.props.bio;
  }

  public get whatsapp(): string {
    return this.props.whatsapp;
  }

  public get createdAt(): Date {
    return this.props.createdAt;
  }

  public get updatedAt(): Date {
    return this.props.updatedAt;
  }
}

export { User };
