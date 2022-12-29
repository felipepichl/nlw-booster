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

  public set name(name: string) {
    this.props.name = name;
  }

  public get name(): string {
    return this.props.name;
  }

  public set username(username: string) {
    this.props.username = username;
  }

  public get username(): string {
    return this.props.username;
  }

  public set email(email: string) {
    this.props.email = email;
  }

  public get email(): string {
    return this.props.email;
  }

  public set password(password: string) {
    this.props.password = password;
  }

  public get password(): string {
    return this.props.password;
  }

  public set avatar(avatar: string) {
    this.props.avatar = avatar;
  }

  public get avatar(): string {
    return this.props.avatar;
  }

  public set bio(bio: string) {
    this.props.bio = bio;
  }

  public get bio(): string {
    return this.props.bio;
  }

  public set whatsapp(whatsapp: string) {
    this.props.whatsapp = whatsapp;
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
