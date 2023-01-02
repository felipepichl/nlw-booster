import { AggregateRoot } from "@shared/core/domain/AggregateRoot";

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
}

export { User };
