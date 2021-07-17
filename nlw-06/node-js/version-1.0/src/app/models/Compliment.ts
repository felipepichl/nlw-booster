import {
  Entity,
  Column,
  PrimaryColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

import { v4 as uuid } from 'uuid';

import { Expose, Exclude } from 'class-transformer';

import { User } from './User';
import { Tag } from './Tag';

@Entity('compliments')
class Compliment {
  @PrimaryColumn()
  readonly id: string;

  @Column()
  @Exclude()
  user_sender: string;

  @JoinColumn({ name: 'user_sender' })
  @ManyToOne(() => User)
  @Exclude()
  userSender: User;

  @Column()
  @Exclude()
  user_receiver: string;

  @JoinColumn({ name: 'user_receiver' })
  @ManyToOne(() => User)
  @Exclude()
  userReceiver: User;

  @Column()
  @Exclude()
  tag_id: string;

  @JoinColumn({ name: 'tag_id' })
  @ManyToOne(() => Tag)
  tag: Tag;

  @Column()
  message: string;

  @CreateDateColumn()
  @Exclude()
  created_at: Date;

  @UpdateDateColumn()
  @Exclude()
  updated_at: Date;

  @Expose({ name: 'user_sender' })
  getUserSender(): User {
    return this.userSender;
  }

  @Expose({ name: 'user_receiver' })
  getUserReceiver(): User {
    return this.userReceiver;
  }

  @Expose({ name: 'tag' })
  getUserTag(): Tag {
    return this.tag;
  }

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { Compliment };
